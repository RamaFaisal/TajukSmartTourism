<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class GalleryPhotoFactory extends Factory
{
    public function definition(): array
    {
        return [
            'title' => fake()->words(3, true),
            'image_path' => null,
            'image_url' => 'https://drive.google.com/thumbnail?id='.fake()->bothify('????????????').'&sz=w2000',
            'link' => 'https://www.instagram.com/tajuksmarttourism.official',
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
