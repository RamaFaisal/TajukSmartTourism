<?php

namespace App\Models;

use App\Models\Concerns\HasDualImage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GalleryPhoto extends Model
{
    use HasDualImage, HasFactory;

    protected $fillable = [
        'title',
        'image_path',
        'image_url',
        'link',
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

    protected function imageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('image_path', 'image_url'));
    }
}
