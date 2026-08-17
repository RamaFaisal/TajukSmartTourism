<?php

namespace Tests\Feature;

use App\Models\GalleryPhoto;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GalleryPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_gallery_page_renders_published_photos(): void
    {
        GalleryPhoto::factory()->create(['title' => 'Pemandangan Embung']);

        $this->get('/Informasi/Gallery')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Informasi/Gallery')
                ->has('photos', 1)
                ->where('photos.0.title', 'Pemandangan Embung')
            );
    }

    public function test_unpublished_photos_are_hidden(): void
    {
        GalleryPhoto::factory()->create(['is_published' => false]);

        $this->get('/Informasi/Gallery')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('photos', 0));
    }

    public function test_admin_can_open_the_gallery_photo_list(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/gallery-photos')->assertSuccessful();
    }
}
