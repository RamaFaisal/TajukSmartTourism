<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class TourPackageFactory extends Factory
{
    public function definition(): array
    {
        $name = 'Paket '.fake()->unique()->words(2, true);

        return [
            'slug' => Str::slug($name),
            'name' => $name,
            'price' => 'IDR 150.000',
            'duration' => '1 hari / org',
            'description' => fake()->sentence(),
            'image_path' => null,
            'image_url' => null,
            'facilities' => ['Welcome drink', 'Makan 3x', 'Outbond'],
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
