<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VideoResource\Pages;
use App\Models\Video;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Forms\Get;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Support\HtmlString;

class VideoResource extends Resource
{
    protected static ?string $model = Video::class;

    protected static ?string $navigationIcon = 'heroicon-o-video-camera';

    protected static ?string $modelLabel = 'Video';

    protected static ?string $pluralModelLabel = 'Video';

    protected static ?string $navigationLabel = 'Video';

    protected static ?string $navigationGroup = 'Konten';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make('Video')
                    ->schema([
                        TextInput::make('youtube_url')
                            ->label('Tautan YouTube')
                            ->required()
                            ->placeholder('https://www.youtube.com/watch?v=... atau ID video')
                            ->helperText('Tempel tautan lengkap atau ID video YouTube, contoh: DN3IuwHTcoc.')
                            ->maxLength(2048)
                            ->live()
                            ->debounce(500),
                        TextInput::make('title')
                            ->label('Judul video')
                            ->required()
                            ->maxLength(255),
                        Placeholder::make('preview')
                            ->label('Pratinjau')
                            ->content(function (Get $get): HtmlString {
                                $id = Video::extractYoutubeId((string) $get('youtube_url'));

                                if (blank($id)) {
                                    return new HtmlString('<p class="text-sm text-gray-400">Masukkan tautan YouTube untuk melihat pratinjau.</p>');
                                }

                                return new HtmlString(
                                    '<img src="https://img.youtube.com/vi/'.e($id).'/hqdefault.jpg" alt="Pratinjau video" class="w-64 rounded-lg ring-1 ring-black/10" />'
                                );
                            }),
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
                ImageColumn::make('youtube_thumbnail')
                    ->label('Pratinjau')
                    ->square()
                    ->size(80),
                TextColumn::make('title')->label('Judul')->searchable()->limit(40),
                TextColumn::make('youtube_id')->label('ID Video'),
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
            'index' => Pages\ListVideos::route('/'),
            'create' => Pages\CreateVideo::route('/create'),
            'edit' => Pages\EditVideo::route('/{record}/edit'),
        ];
    }
}
