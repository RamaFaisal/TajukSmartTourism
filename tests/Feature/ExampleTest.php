<?php

namespace Tests\Feature;

use App\Models\Hamlet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_application_returns_a_successful_response(): void
    {
        $this->get('/')->assertStatus(200);
    }

    public function test_the_homepage_lists_published_hamlets(): void
    {
        Hamlet::factory()->create(['slug' => 'banaran', 'name' => 'Dusun Banaran']);
        Hamlet::factory()->create(['slug' => 'gedong', 'is_published' => false]);

        $this->get('/')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Homepage')
                ->has('hamlets', 1)
                ->where('hamlets.0.link', '/dusun/banaran')
            );
    }
}
