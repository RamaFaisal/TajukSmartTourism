<?php

namespace Tests\Feature;

use App\Models\Setting;
use App\Models\TourPackage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PaketPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_paket_page_renders_published_packages(): void
    {
        TourPackage::factory()->create(['name' => 'Paket Live In 1']);

        $this->get('/Paket')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Paket')
                ->has('packages', 1)
                ->where('packages.0.title', 'Paket Live In 1')
            );
    }

    public function test_unpublished_packages_are_hidden(): void
    {
        TourPackage::factory()->create(['is_published' => false]);

        $this->get('/Paket')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('packages', 0));
    }

    public function test_whatsapp_number_comes_from_settings_with_fallback(): void
    {
        $this->get('/Paket')
            ->assertInertia(fn ($page) => $page->where('whatsapp', '6283831597088'));

        Setting::current()->update(['whatsapp' => '6281234567890']);

        $this->get('/Paket')
            ->assertInertia(fn ($page) => $page->where('whatsapp', '6281234567890'));
    }
}
