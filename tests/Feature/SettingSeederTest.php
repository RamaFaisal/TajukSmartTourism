<?php

namespace Tests\Feature;

use App\Models\Setting;
use Database\Seeders\SettingSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class SettingSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_a_single_settings_row_with_whatsapp_number(): void
    {
        $this->seed(SettingSeeder::class);

        $this->assertSame(1, Setting::count());
        $this->assertSame('6283831597088', Setting::current()->whatsapp);
    }

    public function test_seeding_twice_does_not_duplicate_or_overwrite(): void
    {
        $this->seed(SettingSeeder::class);

        Setting::current()->update(['whatsapp' => '6281234567890']);
        $this->seed(SettingSeeder::class);

        $this->assertSame(1, Setting::count());
        $this->assertSame('6281234567890', Setting::current()->whatsapp);
    }
}
