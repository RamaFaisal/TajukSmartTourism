<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class LegacyArticleCrudRemovedTest extends TestCase
{
    use RefreshDatabase;

    public function test_legacy_article_index_is_gone(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/articles')->assertNotFound();
    }

    public function test_legacy_article_create_is_gone(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/articles/create')->assertNotFound();
    }

    public function test_filament_article_list_is_reachable(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/articles')->assertSuccessful();
    }
}
