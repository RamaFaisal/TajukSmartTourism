<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            HamletSeeder::class,
            DestinationSeeder::class,
            TourPackageSeeder::class,
            VideoSeeder::class,
            ArticleSeeder::class,
            GalleryPhotoSeeder::class,
            ProductSeeder::class,
            SettingSeeder::class,
            AdminSeeder::class,
        ]);
    }
}
