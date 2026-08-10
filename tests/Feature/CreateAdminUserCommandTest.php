<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class CreateAdminUserCommandTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_creates_an_admin_user(): void
    {
        $this->artisan('app:create-admin', [
            '--name' => 'Admin Desa',
            '--email' => 'admin@tajuk.test',
            '--password' => 'rahasia123',
        ])->assertSuccessful();

        $user = User::where('email', 'admin@tajuk.test')->first();

        $this->assertNotNull($user);
        $this->assertTrue($user->is_admin);
        $this->assertTrue(Hash::check('rahasia123', $user->password));
    }

    public function test_it_rejects_a_duplicate_email(): void
    {
        User::factory()->create(['email' => 'admin@tajuk.test']);

        $this->artisan('app:create-admin', [
            '--name' => 'Admin Kedua',
            '--email' => 'admin@tajuk.test',
            '--password' => 'rahasia123',
        ])->assertFailed();

        $this->assertSame(1, User::where('email', 'admin@tajuk.test')->count());
    }

    public function test_it_rejects_a_short_password(): void
    {
        $this->artisan('app:create-admin', [
            '--name' => 'Admin Desa',
            '--email' => 'baru@tajuk.test',
            '--password' => 'pendek',
        ])->assertFailed();

        $this->assertDatabaseMissing('users', ['email' => 'baru@tajuk.test']);
    }
}
