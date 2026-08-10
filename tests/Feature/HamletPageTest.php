<?php

namespace Tests\Feature;

use App\Models\Hamlet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HamletPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_published_hamlet_page_renders(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran', 'name' => 'Dusun Banaran']);

        $this->get('/dusun/banaran')->assertOk();
    }

    public function test_unpublished_hamlet_returns_not_found(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran', 'is_published' => false]);

        $this->get('/dusun/banaran')->assertNotFound();
    }

    public function test_unknown_slug_returns_not_found(): void
    {
        $this->get('/dusun/tidak-ada')->assertNotFound();
    }

    public function test_legacy_url_redirects_permanently(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran']);

        $this->get('/Dusun/DusunBanaran')
            ->assertStatus(301)
            ->assertRedirect('/dusun/banaran');
    }

    public function test_route_is_named(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran']);

        $this->assertSame(
            url('/dusun/banaran'),
            route('hamlets.show', 'banaran')
        );
    }
}
