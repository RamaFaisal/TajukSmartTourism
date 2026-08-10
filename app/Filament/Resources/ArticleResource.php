<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Models\Article;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\TernaryFilter;
use Filament\Tables\Table;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $modelLabel = 'Berita';

    protected static ?string $pluralModelLabel = 'Berita';

    protected static ?string $navigationLabel = 'Berita';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->label('Judul')
                    ->required()
                    ->maxLength(255),
                TextInput::make('slug')
                    ->label('Slug URL')
                    ->maxLength(255)
                    ->unique(ignoreRecord: true)
                    ->helperText('Biarkan kosong untuk dibuat otomatis dari judul.'),
                Select::make('category')
                    ->label('Kategori')
                    ->options([
                        'berita' => 'Berita',
                        'kegiatan' => 'Kegiatan',
                        'pengumuman' => 'Pengumuman',
                        'wisata' => 'Wisata',
                    ])
                    ->default('berita')
                    ->required(),
                Textarea::make('excerpt')
                    ->label('Ringkasan')
                    ->rows(3)
                    ->maxLength(300)
                    ->columnSpanFull(),
                RichEditor::make('content')
                    ->label('Isi berita')
                    ->required()
                    ->columnSpanFull(),
                FileUpload::make('image_path')
                    ->label('Unggah gambar')
                    ->image()
                    ->disk('public')
                    ->directory('images/articles')
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
                Toggle::make('is_published')
                    ->label('Terbitkan')
                    ->helperText('Berita yang belum diterbitkan tidak tampil di situs publik.'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->limit(50),
                TextColumn::make('category')
                    ->label('Kategori')
                    ->badge(),
                IconColumn::make('is_published')
                    ->label('Terbit')
                    ->boolean(),
                TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime('d M Y')
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->filters([
                TernaryFilter::make('is_published')
                    ->label('Status terbit')
                    ->trueLabel('Sudah terbit')
                    ->falseLabel('Belum terbit')
                    ->native(false),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
