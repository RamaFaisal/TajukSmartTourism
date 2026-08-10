<?php

namespace Database\Seeders;

use App\Models\Video;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->videos() as $order => $video) {
            Video::updateOrCreate(
                ['youtube_url' => $video['youtube_url']],
                [...$video, 'sort_order' => $order, 'is_published' => true]
            );
        }
    }

    private function videos(): array
    {
        return [
            [
                'youtube_url' => 'https://www.youtube.com/watch?v=DN3IuwHTcoc',
                'title' => 'Jelajah Pesona Camping Ground Tiamo Desa Tajuk',
            ],
            [
                'youtube_url' => 'https://www.youtube.com/watch?v=1g8k7J0j3xE',
                'title' => 'Jelajah Pesona Dusun Tajuk',
            ],
        ];
    }
}
