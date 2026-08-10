<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DestinationFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->city();

        return [
            'slug' => Str::slug($name),
            'name' => $name,
            'hero_headline' => fake()->sentence(),
            'hero_image_path' => null,
            'hero_image_url' => null,
            'body' => '<p>'.fake()->paragraph().'</p>',
            'hours' => 'Setiap hari, 08:00–17:00',
            'price' => 'Rp 5.000,00',
            'price_note' => null,
            'facilities' => ['Toilet', 'Area Parkir'],
            'card_image_path' => null,
            'card_image_url' => null,
            'lat' => fake()->latitude(-7.5, -7.3),
            'lng' => fake()->longitude(110.3, 110.6),
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
