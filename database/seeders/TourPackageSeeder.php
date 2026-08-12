<?php

namespace Database\Seeders;

use App\Models\TourPackage;
use Illuminate\Database\Seeder;

class TourPackageSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->packages() as $order => $package) {
            TourPackage::updateOrCreate(
                ['slug' => $package['slug']],
                [...$package, 'sort_order' => $order, 'is_published' => true]
            );
        }
    }

    private function packages(): array
    {
        return [
            [
                'slug' => 'live-in-1-hari',
                'name' => 'Paket Live In 1 Hari',
                'price' => 'IDR 150.000',
                'duration' => '1 hari / org',
                'description' => 'Cicipi kehidupan desa dalam satu hari penuh — disambut tarian tradisional, ikut keseharian warga, dan pulang dengan kenangan manis.',
                'image_url' => 'https://drive.google.com/thumbnail?id=1XUqqWIBY0KOpjkOY-nt-5juLs4CKVwa1&sz=w2000',
                'facilities' => [
                    'Welcome drink & Welcome Dance',
                    'Kamar kaps 2-3 Orang',
                    'Makan 3x',
                    'Snack 2x',
                    'Listrik & Air',
                    'Outbond / Game',
                    'Family Activity',
                ],
            ],
            [
                'slug' => 'live-in-2-hari',
                'name' => 'Paket Live In 2 Hari',
                'price' => 'IDR 250.000',
                'duration' => '2 hari / org',
                'description' => 'Rasakan dua hari penuh bersama keluarga asuh, dari berkebun di pagi hari hingga berkumpul hangat di malam hari.',
                'image_url' => 'https://drive.google.com/thumbnail?id=1iGxBfaMWVQj90a3eT5VigasU5rTfZWxm&sz=w2000',
                'facilities' => [
                    'Welcome drink & Welcome Dance',
                    'Kamar kaps 2-3 Orang',
                    'Makan 6x',
                    'Snack 4x',
                    'Listrik & Air',
                    'Outbond / Game',
                    'Senam',
                    'Family Activity',
                ],
            ],
            [
                'slug' => 'live-in-3-hari',
                'name' => 'Paket Live In 3 Hari',
                'price' => 'IDR 350.000',
                'duration' => '3 hari / org',
                'description' => 'Pengalaman paling mendalam — tinggal tiga hari bersama warga Dusun Ngaduman dan merasakan seluruh ritme kehidupan desa.',
                'image_url' => 'https://drive.google.com/thumbnail?id=10R_wkLV2tSs2OoytjDRQpHLzmLjF-l1b&sz=w2000',
                'facilities' => [
                    'Welcome drink & Welcome Dance',
                    'Kamar kaps 2-3 Orang sesuai kondisi',
                    'Makan 9x',
                    'Snack 6x',
                    'Listrik & Air',
                    'Outbond / Game',
                    'Senam',
                    'Family Activity',
                ],
            ],
        ];
    }
}
