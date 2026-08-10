<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class HamletFactory extends Factory
{
    public function definition(): array
    {
        $name = fake()->unique()->city();

        return [
            'slug' => Str::slug($name),
            'name' => 'Dusun '.$name,
            'hero_headline' => fake()->sentence(),
            'hero_image_path' => null,
            'hero_image_url' => null,
            'body' => '<p>'.fake()->paragraph().'</p>',
            'card_image_path' => null,
            'card_image_url' => null,
            'sort_order' => 0,
            'is_published' => true,
        ];
    }
}
