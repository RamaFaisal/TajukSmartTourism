<?php

namespace App\Filament\Resources;

use App\Filament\Resources\HamletResource\Pages;
use App\Models\Hamlet;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class HamletResource extends Resource
{
    protected static ?string $model = Hamlet::class;

    protected static ?string $navigationIcon = 'heroicon-o-home-modern';

    protected static ?string $modelLabel = 'Dusun';

    protected static ?string $pluralModelLabel = 'Dusun';

    protected static ?string $navigationLabel = 'Dusun';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Identitas')
                    ->schema([
                        TextInput::make('name')
                            ->label('Nama dusun')
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
                Section::make('Gambar Utama')
                    ->schema([
                        FileUpload::make('hero_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/hamlets')
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
                    ->description('Dipakai pada daftar dusun di bagian bawah halaman.')
                    ->schema([
                        FileUpload::make('card_image_path')
                            ->label('Unggah gambar')
                            ->image()
                            ->disk('public')
                            ->directory('images/hamlets')
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
                    ->label('Isi profil')
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
            'index' => Pages\ListHamlets::route('/'),
            'create' => Pages\CreateHamlet::route('/create'),
            'edit' => Pages\EditHamlet::route('/{record}/edit'),
        ];
    }
}
