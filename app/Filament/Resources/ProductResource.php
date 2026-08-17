<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Models\Product;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
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

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    protected static ?string $modelLabel = 'Produk';

    protected static ?string $pluralModelLabel = 'Produk';

    protected static ?string $navigationLabel = 'Produk UMKM';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Informasi Produk')
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama produk')
                            ->required()
                            ->maxLength(255),
                        Select::make('category')
                            ->label('Kategori')
                            ->options(Product::categoryLabels())
                            ->default('olahan')
                            ->required(),
                        Textarea::make('description')
                            ->label('Deskripsi')
                            ->rows(3)
                            ->maxLength(1000),
                        TextInput::make('external_url')
                            ->label('Tautan eksternal (opsional)')
                            ->url()
                            ->maxLength(2048)
                            ->helperText('Contoh: toko Instagram atau Shopee produk tersebut.'),
                    ]),
                Section::make('Gambar')
                    ->schema([
                        FileUpload::make('image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/products')
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
                    ->size(60),
                TextColumn::make('name')->label('Nama')->searchable()->limit(40),
                TextColumn::make('category')
                    ->label('Kategori')
                    ->badge()
                    ->formatStateUsing(fn (string $state): string => Product::categoryLabels()[$state] ?? $state),
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
