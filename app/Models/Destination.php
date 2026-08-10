<?php

namespace App\Models;

use App\Models\Concerns\HasDualImage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasDualImage, HasFactory;

    protected $fillable = [
        'slug',
        'name',
        'hero_headline',
        'hero_image_path',
        'hero_image_url',
        'body',
        'hours',
        'price',
        'price_note',
        'facilities',
        'card_image_path',
        'card_image_url',
        'lat',
        'lng',
        'sort_order',
        'is_published',
    ];

    protected $casts = [
        'lat' => 'float',
        'lng' => 'float',
        'facilities' => 'array',
        'is_published' => 'boolean',
        'sort_order' => 'integer',
    ];

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('is_published', true);
    }

    protected function heroImageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('hero_image_path', 'hero_image_url'));
    }

    protected function cardImageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('card_image_path', 'card_image_url'));
    }
}
