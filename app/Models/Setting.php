<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Setting extends Model
{
    protected $fillable = [
        'site_name',
        'site_description',
        'address',
        'whatsapp',
        'instagram_url',
        'tiktok_url',
        'youtube_url',
        'ar_url',
        'og_image_path',
        'og_image_url',
    ];

    public static function current(): self
    {
        return static::firstOrCreate([]);
    }

    protected function ogImageSrc(): Attribute
    {
        return Attribute::get(function (): ?string {
            if (filled($this->og_image_path)) {
                return Storage::disk('public')->url($this->og_image_path);
            }

            return $this->og_image_url;
        });
    }
}
