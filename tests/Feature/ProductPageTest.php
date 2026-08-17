<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_product_page_renders_published_products(): void
    {
        Product::factory()->create(['name' => 'Kopi Damalung', 'category' => 'olahan']);

        $this->get('/Informasi/Produk')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Informasi/Produk')
                ->has('products', 1)
                ->where('products.0.name', 'Kopi Damalung')
                ->where('products.0.category', 'olahan')
            );
    }

    public function test_unpublished_products_are_hidden(): void
    {
        Product::factory()->create(['is_published' => false]);

        $this->get('/Informasi/Produk')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('products', 0));
    }

    public function test_admin_can_open_the_product_list(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/products')->assertSuccessful();
    }
}
