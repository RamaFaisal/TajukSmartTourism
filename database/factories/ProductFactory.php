<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'name' => fake()->words(2, true),
            'description' => fake()->sentence(),
            'category' => 'olahan',
            'image_path' => null,
            'image_url' => 'https://drive.google.com/thumbnail?id='.fake()->bothify('????????????').'&sz=w2000',
            'external_url' => 'https://shopee.co.id/',
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
