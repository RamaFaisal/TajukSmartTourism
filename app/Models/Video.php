<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = [
        'youtube_url',
        'title',
        'sort_order',
        'is_published',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    public static function extractYoutubeId(string $url): string
    {
        if (preg_match(
            '/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/',
            $url,
            $matches
        )) {
            return $matches[1];
        }

        return trim($url);
    }

    protected function youtubeId(): Attribute
    {
        return Attribute::get(fn (): string => static::extractYoutubeId($this->youtube_url));
    }

    protected function youtubeThumbnail(): Attribute
    {
        return Attribute::get(fn (): string => 'https://img.youtube.com/vi/'.$this->youtube_id.'/hqdefault.jpg');
    }
}
