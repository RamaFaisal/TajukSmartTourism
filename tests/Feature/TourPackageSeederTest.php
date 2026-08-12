<?php

namespace Tests\Feature;

use App\Models\TourPackage;
use Database\Seeders\TourPackageSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TourPackageSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_three_tour_packages(): void
    {
        $this->seed(TourPackageSeeder::class);

        $this->assertSame(3, TourPackage::count());
    }

    public function test_every_package_has_content_image_and_facilities(): void
    {
        $this->seed(TourPackageSeeder::class);

        foreach (TourPackage::all() as $package) {
            $this->assertNotEmpty($package->name, "Nama kosong: {$package->slug}");
            $this->assertNotEmpty($package->price, "Harga kosong: {$package->slug}");
            $this->assertNotEmpty($package->duration, "Durasi kosong: {$package->slug}");
            $this->assertNotEmpty($package->description, "Deskripsi kosong: {$package->slug}");
            $this->assertNotNull($package->image_src, "Gambar kosong: {$package->slug}");
            $this->assertNotEmpty($package->facilities, "Fasilitas kosong: {$package->slug}");
        }
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(TourPackageSeeder::class);
        $this->seed(TourPackageSeeder::class);

        $this->assertSame(3, TourPackage::count());
    }

    public function test_sort_order_follows_the_original_card_order(): void
    {
        $this->seed(TourPackageSeeder::class);

        $this->assertSame(
            ['live-in-1-hari', 'live-in-2-hari', 'live-in-3-hari'],
            TourPackage::orderBy('sort_order')->pluck('slug')->all()
        );
    }
}
