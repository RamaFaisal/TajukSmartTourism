<?php

namespace Tests\Feature;

use App\Models\Destination;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DestinationPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_published_destination_page_renders(): void
    {
        Destination::factory()->create(['slug' => 'dungkluruk', 'name' => 'Dungkluruk']);

        $this->get('/destinasi/dungkluruk')->assertOk();
    }

    public function test_unpublished_destination_returns_not_found(): void
    {
        Destination::factory()->create(['slug' => 'dungkluruk', 'is_published' => false]);

        $this->get('/destinasi/dungkluruk')->assertNotFound();
    }

    public function test_unknown_slug_returns_not_found(): void
    {
        $this->get('/destinasi/tidak-ada')->assertNotFound();
    }

    public function test_legacy_url_redirects_permanently(): void
    {
        Destination::factory()->create(['slug' => 'dungkluruk']);

        $this->get('/Destinasi/DungKluruk')
            ->assertStatus(301)
            ->assertRedirect('/destinasi/dungkluruk');
    }

    public function test_route_is_named(): void
    {
        Destination::factory()->create(['slug' => 'dungkluruk']);

        $this->assertSame(
            url('/destinasi/dungkluruk'),
            route('destinations.show', 'dungkluruk')
        );
    }
}
