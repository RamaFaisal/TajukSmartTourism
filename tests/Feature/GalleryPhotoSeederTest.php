<?php

namespace Tests\Feature;

use App\Models\GalleryPhoto;
use Database\Seeders\GalleryPhotoSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GalleryPhotoSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_twenty_photos(): void
    {
        $this->seed(GalleryPhotoSeeder::class);

        $this->assertSame(20, GalleryPhoto::count());
    }

    public function test_every_photo_has_an_image_and_instagram_link(): void
    {
        $this->seed(GalleryPhotoSeeder::class);

        foreach (GalleryPhoto::all() as $photo) {
            $this->assertNotNull($photo->image_src, "Gambar kosong: {$photo->id}");
            $this->assertStringContainsString('instagram.com', (string) $photo->link);
        }
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(GalleryPhotoSeeder::class);
        $this->seed(GalleryPhotoSeeder::class);

        $this->assertSame(20, GalleryPhoto::count());
    }
}
