<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TourPackageResource\Pages;
use App\Models\TourPackage;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class TourPackageResource extends Resource
{
    protected static ?string $model = TourPackage::class;

    protected static ?string $navigationIcon = 'heroicon-o-ticket';

    protected static ?string $modelLabel = 'Paket Wisata';

    protected static ?string $pluralModelLabel = 'Paket Wisata';

    protected static ?string $navigationLabel = 'Paket Wisata';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas')
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama paket')
                            ->required()
                            ->maxLength(255),
                        TextInput::make('slug')
                            ->label('Slug URL')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->maxLength(255),
                        TextInput::make('price')
                            ->label('Harga')
                            ->placeholder('IDR 150.000')
                            ->maxLength(255),
                        TextInput::make('duration')
                            ->label('Durasi')
                            ->placeholder('1 hari / org')
                            ->maxLength(255),
                    ])
                    ->columns(2),
                Section::make('Gambar')
                    ->schema([
                        FileUpload::make('image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/packages')
                            ->maxSize(2048)
                            ->acceptedFileTypes(['image/jpeg', 'image/png', 'image/webp'])
                            ->imageResizeMode('contain')
                            ->imageResizeTargetWidth('1920')
                            ->imageResizeTargetHeight('1920'),
                        TextInput::make('image_url')
                            ->label('Atau tempel tautan gambar')
                            ->url()
                            ->maxLength(2048),
                    ]),
                Section::make('Isi')
                    ->schema([
                        Textarea::make('description')
                            ->label('Deskripsi')
                            ->placeholder('Jelaskan pengalaman yang didapatkan dari paket ini.')
                            ->rows(3)
                            ->columnSpanFull(),
                        TagsInput::make('facilities')
                            ->label('Fasilitas')
                            ->placeholder('Ketik nama fasilitas, tekan Enter')
                            ->columnSpanFull(),
                    ]),
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
                ImageColumn::make('image_src')
                    ->label('Gambar')
                    ->square()
                    ->size(80),
                TextColumn::make('name')->label('Nama')->searchable(),
                TextColumn::make('price')->label('Harga'),
                TextColumn::make('duration')->label('Durasi'),
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
            'index' => Pages\ListTourPackages::route('/'),
            'create' => Pages\CreateTourPackage::route('/create'),
            'edit' => Pages\EditTourPackage::route('/{record}/edit'),
        ];
    }
}
