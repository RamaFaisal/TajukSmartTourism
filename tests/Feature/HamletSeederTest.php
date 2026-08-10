<?php

namespace Tests\Feature;

use App\Models\Hamlet;
use Database\Seeders\HamletSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class HamletSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_eleven_hamlets(): void
    {
        $this->seed(HamletSeeder::class);

        $this->assertSame(11, Hamlet::count());
    }

    public function test_every_hamlet_has_content_and_images(): void
    {
        $this->seed(HamletSeeder::class);

        foreach (Hamlet::all() as $hamlet) {
            $this->assertNotEmpty($hamlet->name, "Nama kosong: {$hamlet->slug}");
            $this->assertNotEmpty($hamlet->hero_headline, "Headline kosong: {$hamlet->slug}");
            $this->assertNotEmpty($hamlet->body, "Isi kosong: {$hamlet->slug}");
            $this->assertNotNull($hamlet->hero_image_src, "Gambar hero kosong: {$hamlet->slug}");
            $this->assertNotNull($hamlet->card_image_src, "Gambar kartu kosong: {$hamlet->slug}");
        }
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(HamletSeeder::class);
        $this->seed(HamletSeeder::class);

        $this->assertSame(11, Hamlet::count());
    }

    public function test_banaran_keeps_its_full_text(): void
    {
        $this->seed(HamletSeeder::class);

        $banaran = Hamlet::where('slug', 'banaran')->firstOrFail();

        $this->assertSame(12, substr_count($banaran->body, '<p>'));
        $this->assertStringContainsString('Topeng Ireng', $banaran->body);
    }

    public function test_sort_order_follows_the_original_card_order(): void
    {
        $this->seed(HamletSeeder::class);

        $this->assertSame(
            ['pulihan', 'tajuk', 'puyang', 'cingklok', 'macanan', 'ngroto', 'banaran', 'sokowolu', 'ngaduman', 'gedong', 'kaliajeng'],
            Hamlet::orderBy('sort_order')->pluck('slug')->all()
        );
    }
}
