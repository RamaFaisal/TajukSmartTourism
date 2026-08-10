<?php

namespace Tests\Feature;

use App\Models\Article;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArticleVisibilityTest extends TestCase
{
    use RefreshDatabase;

    public function test_api_returns_only_published_articles(): void
    {
        $published = Article::factory()->create(['title' => 'Berita Terbit']);
        Article::factory()->draft()->create(['title' => 'Berita Draft']);

        $response = $this->getJson('/api/articles');

        $response->assertOk();
        $this->assertCount(1, $response->json('data'));
        $this->assertSame($published->id, $response->json('data.0.id'));
    }

    public function test_published_article_detail_is_reachable(): void
    {
        $article = Article::factory()->create();

        $this->get("/Informasi/Berita/{$article->id}")->assertOk();
    }

    public function test_draft_article_detail_returns_not_found(): void
    {
        $article = Article::factory()->draft()->create();

        $this->get("/Informasi/Berita/{$article->id}")->assertNotFound();
    }

    public function test_published_scope_filters_drafts(): void
    {
        Article::factory()->count(2)->create();
        Article::factory()->draft()->count(3)->create();

        $this->assertSame(2, Article::published()->count());
    }
}
