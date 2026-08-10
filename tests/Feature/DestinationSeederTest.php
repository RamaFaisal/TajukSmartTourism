<?php

namespace Tests\Feature;

use App\Models\Destination;
use Database\Seeders\DestinationSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DestinationSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_four_destinations(): void
    {
        $this->seed(DestinationSeeder::class);

        $this->assertSame(4, Destination::count());
    }

    public function test_every_destination_has_content_images_coordinates_and_facilities(): void
    {
        $this->seed(DestinationSeeder::class);

        foreach (Destination::all() as $destination) {
            $this->assertNotEmpty($destination->name, "Nama kosong: {$destination->slug}");
            $this->assertNotEmpty($destination->hero_headline, "Headline kosong: {$destination->slug}");
            $this->assertNotEmpty($destination->body, "Isi kosong: {$destination->slug}");
            $this->assertNotNull($destination->hero_image_src, "Gambar hero kosong: {$destination->slug}");
            $this->assertNotNull($destination->card_image_src, "Gambar kartu kosong: {$destination->slug}");
            $this->assertNotNull($destination->lat, "Latitude kosong: {$destination->slug}");
            $this->assertNotNull($destination->lng, "Longitude kosong: {$destination->slug}");
            $this->assertNotEmpty($destination->facilities, "Fasilitas kosong: {$destination->slug}");
        }
    }

    public function test_hours_and_price_are_optional(): void
    {
        $this->seed(DestinationSeeder::class);

        $dungkluruk = Destination::where('slug', 'dungkluruk')->firstOrFail();
        $ngaduman = Destination::where('slug', 'ngaduman')->firstOrFail();

        $this->assertNotNull($dungkluruk->hours);
        $this->assertNotNull($dungkluruk->price);
        $this->assertNull($ngaduman->hours);
        $this->assertNull($ngaduman->price);
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(DestinationSeeder::class);
        $this->seed(DestinationSeeder::class);

        $this->assertSame(4, Destination::count());
    }

    public function test_dungkluruk_keeps_its_facilities_list(): void
    {
        $this->seed(DestinationSeeder::class);

        $dungkluruk = Destination::where('slug', 'dungkluruk')->firstOrFail();

        $this->assertSame([
            'Mushola',
            'Tempat Istirahat dan Bersantai',
            'Area Piknik',
            'Toilet Umum',
            'Area Parkir',
            'Area Camping',
        ], $dungkluruk->facilities);
    }

    public function test_sort_order_follows_the_original_card_order(): void
    {
        $this->seed(DestinationSeeder::class);

        $this->assertSame(
            ['dungkluruk', 'sokowolu', 'ngaduman', 'gpass'],
            Destination::orderBy('sort_order')->pluck('slug')->all()
        );
    }
}
