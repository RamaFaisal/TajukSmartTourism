<?php

namespace Tests\Feature\Filament;

use App\Filament\Resources\ArticleResource;
use App\Filament\Resources\ContactMessageResource;
use Tests\TestCase;

class PanelLocaleTest extends TestCase
{
    public function test_application_locale_is_indonesian(): void
    {
        $this->assertSame('id', config('app.locale'));
    }

    public function test_filament_interface_strings_are_indonesian(): void
    {
        $this->assertSame('Dasbor', trans('filament-panels::pages/dashboard.title'));
    }

    public function test_validation_messages_are_indonesian(): void
    {
        $this->assertSame('Kolom :attribute wajib diisi.', trans('validation.required'));
    }

    public function test_resource_labels_are_indonesian(): void
    {
        $this->assertSame('Berita', ArticleResource::getModelLabel());
        $this->assertSame('Berita', ArticleResource::getPluralModelLabel());
        $this->assertSame('Pesan Masuk', ContactMessageResource::getModelLabel());
    }
}
