<?php

namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ClosedRegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_is_gone(): void
    {
        $this->get('/register')->assertNotFound();
    }

    public function test_registration_cannot_be_submitted(): void
    {
        $this->post('/register', [
            'name' => 'Penyusup',
            'email' => 'penyusup@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ])->assertNotFound();

        $this->assertDatabaseMissing('users', ['email' => 'penyusup@example.com']);
    }

    public function test_password_reset_routes_are_gone(): void
    {
        $this->get('/forgot-password')->assertNotFound();
        $this->post('/forgot-password', ['email' => 'admin@tajuk.test'])->assertNotFound();
        $this->get('/reset-password/some-token')->assertNotFound();
        $this->post('/reset-password', [])->assertNotFound();
    }

    public function test_email_verification_routes_are_gone(): void
    {
        $user = User::factory()->create();

        $this->actingAs($user)->get('/verify-email')->assertNotFound();
        $this->actingAs($user)->post('/email/verification-notification')->assertNotFound();
    }

    public function test_login_route_is_removed(): void
    {
        $this->get('/login')->assertNotFound();
    }

    public function test_filament_login_is_the_only_way_in(): void
    {
        $this->get('/admin/login')->assertOk();
    }
}
