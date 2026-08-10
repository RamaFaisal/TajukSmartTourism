<?php

namespace App\Filament\Pages;

use App\Models\Setting;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Pages\Page;

class ManageSettings extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-cog-6-tooth';

    protected static string $view = 'filament.pages.manage-settings';

    protected static ?string $title = 'Pengaturan Situs';

    protected static ?string $navigationLabel = 'Pengaturan';

    protected static ?string $navigationGroup = 'Sistem';

    public ?array $data = [];

    public function mount(): void
    {
        $this->form->fill(Setting::current()->toArray());
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas Situs')
                    ->schema([
                        TextInput::make('site_name')
                            ->label('Nama situs')
                            ->required()
                            ->maxLength(255),
                        Textarea::make('site_description')
                            ->label('Deskripsi singkat')
                            ->rows(3)
                            ->maxLength(300)
                            ->helperText('Dipakai sebagai deskripsi saat tautan dibagikan ke WhatsApp.'),
                    ]),
                Section::make('Kontak')
                    ->schema([
                        Textarea::make('address')
                            ->label('Alamat')
                            ->rows(2),
                        TextInput::make('whatsapp')
                            ->label('Nomor WhatsApp')
                            ->helperText('Format internasional tanpa tanda plus, contoh 6283831597088.')
                            ->maxLength(20),
                    ]),
                Section::make('Tautan')
                    ->schema([
                        TextInput::make('instagram_url')->label('Instagram')->url()->maxLength(2048),
                        TextInput::make('tiktok_url')->label('TikTok')->url()->maxLength(2048),
                        TextInput::make('youtube_url')->label('YouTube')->url()->maxLength(2048),
                        TextInput::make('ar_url')->label('Halaman AR')->url()->maxLength(2048),
                    ]),
                Section::make('Gambar Bagikan')
                    ->schema([
                        FileUpload::make('og_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/settings')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920'),
                        TextInput::make('og_image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048),
                    ]),
            ])
            ->statePath('data');
    }

    public function save(): void
    {
        Setting::current()->update($this->form->getState());

        Notification::make()
            ->success()
            ->title('Pengaturan berhasil disimpan.')
            ->send();
    }
}
