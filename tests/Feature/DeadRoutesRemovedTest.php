<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DeadRoutesRemovedTest extends TestCase
{
    use RefreshDatabase;

    public function test_legacy_ar_route_is_gone(): void
    {
        $this->get('/AR')->assertNotFound();
    }

    public function test_homepage_still_renders(): void
    {
        $this->get('/')->assertOk();
    }
}
