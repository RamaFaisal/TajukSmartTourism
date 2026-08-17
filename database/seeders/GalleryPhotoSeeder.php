<?php

namespace Database\Seeders;

use App\Models\GalleryPhoto;
use Illuminate\Database\Seeder;

class GalleryPhotoSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->photos() as $order => $photo) {
            GalleryPhoto::updateOrCreate(
                ['image_url' => $photo['image_url']],
                [...$photo, 'sort_order' => $order, 'is_published' => true]
            );
        }
    }

    private function photos(): array
    {
        $link = 'https://www.instagram.com/tajuksmarttourism.official?igsh=NGk2a2RrNWo5d3B3';

        return collect([
            '1SmHb-j86cV82xilSCoWAc_p7okhWI_8e',
            '1fmeLTVY00RD0p1SJ8yn44J2CM3XJxZQP',
            '1mb13jMebgns5zuesZ-cAbZ-kxSarWbEe',
            '1ebZTNZGlaX2bhB9m-Tc2lILHZ43ZwHKm',
            '1O9gpHAuUlifxq1rS9aL72-RtFqrfENOn',
            '1eYfKksQqODA5k5508mlHcVtnnl4Z1DRM',
            '1dXSVeGFo9NrQj26nyn-q3CWSndRB0acC',
            '1Q9kLspp6GEoJ7UWMPuCI8RzIrt2vSPVT',
            '1LPlybj-9twx280NhTKxASZve-eIQY085',
            '1jYrU29jPA0NAx6EMYkYCsT0KKmVWaaJb',
            '17Yj6RwuB_Br3CD3lUn7OhK1a_n903Anm',
            '1pI7DHqRkHdKSt-HfywBcYd_MHRi7FbdA',
            '1fwBvy_ELwBg8lCoNzUb8SYYlZdaVPuDD',
            '1gRiDFq3coLxJ5K5g2_GixOD-0hXw41yZ',
            '1-w5gW_LdypMGNmWHYbv96vQORzLpJuRM',
            '1yuIVcKgKTkDAsZxfiLlsUkeyttyv8sTx',
            '1iglTMYZR7meXv_aFcBa4JoaAXXwbK_x9',
            '1KWTb3xH957jB5-o3ULIYjF_jF1NqWYLa',
            '1Z4FgxS1opvwIzuRZ3pHa1jF-Z3gW5ZSv',
            '1Rsb1BlnbvmsETtrIuZfzwrD0edyzwLxj',
        ])->map(fn (string $id): array => [
            'image_url' => 'https://drive.google.com/thumbnail?id='.$id.'&sz=w2000',
            'link' => $link,
        ])->all();
    }
}
