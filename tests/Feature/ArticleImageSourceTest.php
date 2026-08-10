<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleImageSourceTest extends TestCase
{
    use RefreshDatabase;

    public function test_uploaded_path_is_resolved_through_storage(): void
    {
        $article = Article::factory()->create([
            'image_path' => 'images/articles/foto.jpg',
            'image_url' => null,
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/articles/foto.jpg',
            $article->image_src
        );
    }

    public function test_external_url_is_returned_unchanged(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=ABC123&sz=w2000';

        $article = Article::factory()->create([
            'image_path' => null,
            'image_url' => $url,
        ]);

        $this->assertSame($url, $article->image_src);
    }

    public function test_upload_takes_precedence_over_external_url(): void
    {
        $article = Article::factory()->create([
            'image_path' => 'images/articles/foto.jpg',
            'image_url' => 'https://drive.google.com/thumbnail?id=ABC123',
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/articles/foto.jpg',
            $article->image_src
        );
    }

    public function test_image_src_is_null_when_both_columns_are_empty(): void
    {
        $article = Article::factory()->create([
            'image_path' => null,
            'image_url' => null,
        ]);

        $this->assertNull($article->image_src);
    }

    public function test_api_exposes_the_resolved_image(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=ABC123';

        Article::factory()->create([
            'image_path' => null,
            'image_url' => $url,
        ]);

        $this->getJson('/api/articles')->assertJsonPath('data.0.image', $url);
    }
}
