<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleSlugTest extends TestCase
{
    use RefreshDatabase;

    public function test_slug_is_generated_from_the_title(): void
    {
        $article = Article::factory()->create(['title' => 'Panen Raya di Dusun Banaran']);

        $this->assertSame('panen-raya-di-dusun-banaran', $article->slug);
    }

    public function test_duplicate_titles_produce_distinct_slugs(): void
    {
        $first = Article::factory()->create(['title' => 'Panen Raya']);
        $second = Article::factory()->create(['title' => 'Panen Raya']);

        $this->assertSame('panen-raya', $first->slug);
        $this->assertSame('panen-raya-2', $second->slug);
    }

    public function test_an_explicit_slug_is_kept(): void
    {
        $article = Article::factory()->create([
            'title' => 'Panen Raya',
            'slug' => 'panen-raya-2026',
        ]);

        $this->assertSame('panen-raya-2026', $article->slug);
    }

    public function test_excerpt_can_be_stored(): void
    {
        $article = Article::factory()->create(['excerpt' => 'Ringkasan singkat berita.']);

        $this->assertSame('Ringkasan singkat berita.', $article->fresh()->excerpt);
    }
}
