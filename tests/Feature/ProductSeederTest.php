<?php

namespace Tests\Feature;

use App\Models\Product;
use Database\Seeders\ProductSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductSeederTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_seeds_four_products(): void
    {
        $this->seed(ProductSeeder::class);

        $this->assertSame(4, Product::count());
    }

    public function test_every_product_has_name_image_and_category(): void
    {
        $this->seed(ProductSeeder::class);

        foreach (Product::all() as $product) {
            $this->assertNotEmpty($product->name, "Nama kosong: {$product->id}");
            $this->assertNotEmpty($product->category, "Kategori kosong: {$product->id}");
            $this->assertNotNull($product->image_src, "Gambar kosong: {$product->id}");
        }
    }

    public function test_seeding_twice_does_not_duplicate(): void
    {
        $this->seed(ProductSeeder::class);
        $this->seed(ProductSeeder::class);

        $this->assertSame(4, Product::count());
    }
}
