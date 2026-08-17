<?php

namespace App\Models;

use App\Models\Concerns\HasDualImage;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasDualImage, HasFactory;

    protected $fillable = [
        'name',
        'description',
        'category',
        'image_path',
        'image_url',
        'external_url',
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

    public static function categoryLabels(): array
    {
        return [
            'olahan' => 'Produk Olahan',
            'kerajinan' => 'Produk Kerajinan',
        ];
    }

    protected function imageSrc(): Attribute
    {
        return Attribute::get(fn (): ?string => $this->resolveImage('image_path', 'image_url'));
    }
}
