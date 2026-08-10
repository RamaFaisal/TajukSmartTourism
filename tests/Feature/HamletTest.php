<?php

namespace Tests\Feature;

use App\Models\Article;
use App\Models\Hamlet;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HamletTest extends TestCase
{
    use RefreshDatabase;

    public function test_hero_image_prefers_upload_over_external_url(): void
    {
        $hamlet = Hamlet::factory()->create([
            'hero_image_path' => 'images/hamlets/hero.jpg',
            'hero_image_url' => 'https://drive.google.com/thumbnail?id=ABC',
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/hamlets/hero.jpg',
            $hamlet->hero_image_src
        );
    }

    public function test_card_image_falls_back_to_external_url(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=ABC';

        $hamlet = Hamlet::factory()->create([
            'card_image_path' => null,
            'card_image_url' => $url,
        ]);

        $this->assertSame($url, $hamlet->card_image_src);
    }

    public function test_published_scope_hides_drafts(): void
    {
        Hamlet::factory()->count(2)->create();
        Hamlet::factory()->count(3)->create(['is_published' => false]);

        $this->assertSame(2, Hamlet::published()->count());
    }

    public function test_article_still_resolves_its_image_through_the_trait(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=XYZ';

        $article = Article::factory()->create([
            'image_path' => null,
            'image_url' => $url,
        ]);

        $this->assertSame($url, $article->image_src);
    }

    public function test_admin_can_open_the_hamlet_list(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/hamlets')->assertSuccessful();
    }
}
