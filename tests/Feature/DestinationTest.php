<?php

namespace Tests\Feature;

use App\Models\Destination;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DestinationTest extends TestCase
{
    use RefreshDatabase;

    public function test_hero_image_prefers_upload_over_external_url(): void
    {
        $destination = Destination::factory()->create([
            'hero_image_path' => 'images/destinations/hero.jpg',
            'hero_image_url' => 'https://drive.google.com/thumbnail?id=ABC',
        ]);

        $this->assertSame(
            config('app.url').'/storage/images/destinations/hero.jpg',
            $destination->hero_image_src
        );
    }

    public function test_card_image_falls_back_to_external_url(): void
    {
        $url = 'https://drive.google.com/thumbnail?id=ABC';

        $destination = Destination::factory()->create([
            'card_image_path' => null,
            'card_image_url' => $url,
        ]);

        $this->assertSame($url, $destination->card_image_src);
    }

    public function test_published_scope_hides_drafts(): void
    {
        Destination::factory()->count(2)->create();
        Destination::factory()->count(3)->create(['is_published' => false]);

        $this->assertSame(2, Destination::published()->count());
    }

    public function test_admin_can_open_the_destination_list(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/destinations')->assertSuccessful();
    }
}
