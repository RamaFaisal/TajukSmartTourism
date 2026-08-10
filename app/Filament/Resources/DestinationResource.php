<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DestinationResource\Pages;
use App\Models\Destination;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class DestinationResource extends Resource
{
    protected static ?string $model = Destination::class;

    protected static ?string $navigationIcon = 'heroicon-o-map-pin';

    protected static ?string $modelLabel = 'Destinasi';

    protected static ?string $pluralModelLabel = 'Destinasi';

    protected static ?string $navigationLabel = 'Destinasi';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas')
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama destinasi')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('slug')
                            ->label('Slug URL')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        Textarea::make('hero_headline')
                            ->label('Kalimat pembuka di gambar utama')
                            ->rows(2),
                    ]),
                Section::make('Info Kunjungan')
                    ->schema([
                        TextInput::make('hours')
                            ->label('Jam buka')
                            ->placeholder('Setiap hari, 08:00–17:00')
                            ->maxLength(255),
                        TextInput::make('price')
                            ->label('Harga tiket')
                            ->placeholder('Rp 5.000,00')
                            ->maxLength(255),
                        TextInput::make('price_note')
                            ->label('Catatan harga (opsional)')
                            ->placeholder('Biaya parkir Rp 2.000,00 untuk motor')
                            ->maxLength(255),
                        TagsInput::make('facilities')
                            ->label('Fasilitas')
                            ->placeholder('Ketik nama fasilitas, tekan Enter')
                            ->columnSpanFull(),
                    ])
                    ->columns(3),
                Section::make('Lokasi Peta')
                    ->description('Koordinat dipakai untuk penanda pada peta.')
                    ->schema([
                        TextInput::make('lat')
                            ->label('Latitude')
                            ->numeric(),
                        TextInput::make('lng')
                            ->label('Longitude')
                            ->numeric(),
                    ])
                    ->columns(2),
                Section::make('Gambar Utama')
                    ->schema([
                        FileUpload::make('hero_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/destinations')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920'),
                        TextInput::make('hero_image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048),
                    ]),
                Section::make('Gambar Kartu')
                    ->description('Dipakai pada daftar destinasi di halaman beranda dan paket.')
                    ->schema([
                        FileUpload::make('card_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/destinations')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920'),
                        TextInput::make('card_image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048),
                    ]),
                RichEditor::make('body')
                    ->label('Isi destinasi')
                    ->helperText('Jam buka, harga tiket, tentang destinasi, daya tarik utama, dan fasilitas ditulis di sini.')
                    ->columnSpanFull(),
                TextInput::make('sort_order')
                    ->label('Urutan tampil')
                    ->numeric()
                    ->default(0),
                Toggle::make('is_published')
                    ->label('Tampilkan di situs')
                    ->default(true),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('sort_order')->label('Urutan')->sortable(),
                TextColumn::make('name')->label('Nama')->searchable(),
                TextColumn::make('slug')->label('Slug'),
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
            'index' => Pages\ListDestinations::route('/'),
            'create' => Pages\CreateDestination::route('/create'),
            'edit' => Pages\EditDestination::route('/{record}/edit'),
        ];
    }
}
