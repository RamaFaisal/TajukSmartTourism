<?php

namespace Database\Seeders;

use App\Models\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    public function run(): void
    {
        Setting::firstOrCreate([], [
            'site_name' => 'Desa Wisata Tajuk',
            'site_description' => 'Situs resmi Desa Wisata Tajuk, Getasan, Kabupaten Semarang.',
            'whatsapp' => '6283831597088',
        ]);
    }
}
