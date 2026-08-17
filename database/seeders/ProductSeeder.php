<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        foreach ($this->products() as $order => $product) {
            Product::updateOrCreate(
                ['name' => $product['name']],
                [...$product, 'sort_order' => $order, 'is_published' => true]
            );
        }
    }

    private function products(): array
    {
        return [
            [
                'name' => 'Kopi Damalung',
                'description' => 'Kopi khas dataran tinggi Damalung dengan cita rasa lembut dan aroma khas lereng Gunung Merbabu.',
                'category' => 'olahan',
                'image_url' => 'https://drive.google.com/thumbnail?id=1IQVcUtU6T7AgX-B56ZNtH6a1Sb4FGEyj&sz=w2000',
                'external_url' => 'https://www.instagram.com/damalung_kopi/',
            ],
            [
                'name' => 'Teh dan Kripik',
                'description' => 'Teh gunung segar dan aneka kripik buatan warga, teman santai yang pas untuk oleh-oleh.',
                'category' => 'olahan',
                'image_url' => 'https://drive.google.com/thumbnail?id=1U5N5XTRC6TUo6PSK_5rN7zVNVFyyMxvi&sz=w2000',
                'external_url' => 'https://shopee.co.id/',
            ],
            [
                'name' => 'Ampyang Coklat',
                'description' => 'Ampyang khas desa yang dilapisi coklat — camilan manis yang disukai wisatawan.',
                'category' => 'olahan',
                'image_url' => 'https://drive.google.com/thumbnail?id=1wyLZ2boUq5HQZKbt_ySoR3mXNp0cJ0kc&sz=w2000',
                'external_url' => 'https://shopee.co.id/',
            ],
            [
                'name' => 'Yoghurt',
                'description' => 'Yoghurt segar hasil olahan susu sapi perah warga Tajuk, sehat dan menyegarkan.',
                'category' => 'olahan',
                'image_url' => 'https://drive.google.com/thumbnail?id=1wY4hrXrnjdRGvShJBCy7tYIegQJfvN-9&sz=w2000',
                'external_url' => 'https://shopee.co.id/',
            ],
        ];
    }
}
