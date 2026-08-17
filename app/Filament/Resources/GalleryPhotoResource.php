<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GalleryPhotoResource\Pages;
use App\Models\GalleryPhoto;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class GalleryPhotoResource extends Resource
{
    protected static ?string $model = GalleryPhoto::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    protected static ?string $modelLabel = 'Foto Galeri';

    protected static ?string $pluralModelLabel = 'Foto Galeri';

    protected static ?string $navigationLabel = 'Galeri';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Gambar')
                    ->schema([
                        FileUpload::make('image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/gallery')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920')
                            ->helperText('Maksimal 2 MB. Gambar diperkecil otomatis ke lebar 1920 piksel.'),
                        TextInput::make('image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048)
                            ->helperText('Dipakai bila tidak ada gambar yang diunggah.'),
                    ]),
                Section::make('Informasi')
                    ->schema([
                        TextInput::make('title')
                            ->label('Judul / keterangan')
                            ->maxLength(255),
                        TextInput::make('link')
                            ->label('Tautan eksternal (opsional)')
                            ->url()
                            ->maxLength(2048)
                            ->helperText('Contoh: tautan Instagram foto tersebut.'),
                        TextInput::make('sort_order')
                            ->label('Urutan tampil')
                            ->numeric()
                            ->default(0),
                        Toggle::make('is_published')
                            ->label('Tampilkan di situs')
                            ->default(true),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sort_order')->label('Urutan')->sortable(),
                ImageColumn::make('image_src')
                    ->label('Gambar')
                    ->square()
                    ->size(60),
                TextColumn::make('title')->label('Judul')->searchable()->placeholder('—')->limit(40),
                IconColumn::make('is_published')->label('Tampil')->boolean(),
            ])
            ->defaultSort('sort_order')
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGalleryPhotos::route('/'),
            'create' => Pages\CreateGalleryPhoto::route('/create'),
            'edit' => Pages\EditGalleryPhoto::route('/{record}/edit'),
        ];
    }
}
