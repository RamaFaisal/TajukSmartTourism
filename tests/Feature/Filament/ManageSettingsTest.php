<?php

namespace Tests\Feature\Filament;

use App\Filament\Pages\ManageSettings;
use App\Models\Setting;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class ManageSettingsTest extends TestCase
{
    use RefreshDatabase;

    public function test_current_always_returns_the_same_single_row(): void
    {
        $first = Setting::current();
        $second = Setting::current();

        $this->assertSame($first->id, $second->id);
        $this->assertSame(1, Setting::count());
    }

    public function test_settings_page_is_reachable_by_admin(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/manage-settings')->assertSuccessful();
    }

    public function test_settings_page_is_forbidden_for_non_admin(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->get('/admin/manage-settings')->assertForbidden();
    }

    public function test_admin_can_save_settings(): void
    {
        $admin = User::factory()->admin()->create();
        $this->actingAs($admin);

        Livewire::test(ManageSettings::class)
            ->set('data.site_name', 'Desa Wisata Tajuk')
            ->set('data.whatsapp', '6283831597088')
            ->set('data.ar_url', 'https://feby-akliji23.github.io/AR-BETA_V01/')
            ->call('save');

        $settings = Setting::current();

        $this->assertSame('Desa Wisata Tajuk', $settings->site_name);
        $this->assertSame('6283831597088', $settings->whatsapp);
        $this->assertSame('https://feby-akliji23.github.io/AR-BETA_V01/', $settings->ar_url);
    }
}
