<?php

namespace Tests\Feature;

use App\Models\Article;
use Database\Seeders\ArticleSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_five_published_articles(): void
    {
        $this->seed(ArticleSeeder::class);

        $this->assertSame(5, Article::count());
        $this->assertSame(5, Article::published()->count());
    }

    public function test_every_article_has_content_and_image(): void
    {
        $this->seed(ArticleSeeder::class);

        foreach (Article::all() as $article) {
            $this->assertNotEmpty($article->title, "Judul kosong: {$article->id}");
            $this->assertNotEmpty($article->content, "Isi kosong: {$article->id}");
            $this->assertNotNull($article->image_src, "Gambar kosong: {$article->id}");
        }
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(ArticleSeeder::class);
        $this->seed(ArticleSeeder::class);

        $this->assertSame(5, Article::count());
    }
}
