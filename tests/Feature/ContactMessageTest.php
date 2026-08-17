<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactMessageTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_visitor_can_submit_the_contact_form(): void
    {
        $response = $this->post('/submit-message', [
            'name' => 'Budi',
            'email' => 'budi@example.com',
            'message' => 'Halo, saya ingin bertanya soal paket wisata.',
        ]);

        $response->assertRedirect();
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Budi',
            'email' => 'budi@example.com',
        ]);
    }

    public function test_name_email_and_message_are_required(): void
    {
        $response = $this->post('/submit-message', []);

        $response->assertSessionHasErrors(['name', 'email', 'message']);
        $this->assertSame(0, ContactMessage::count());
    }

    public function test_email_must_be_valid(): void
    {
        $response = $this->post('/submit-message', [
            'name' => 'Budi',
            'email' => 'not-an-email',
            'message' => 'Halo.',
        ]);

        $response->assertSessionHasErrors(['email']);
    }

    public function test_admin_can_open_the_contact_message_list(): void
    {
        ContactMessage::create([
            'name' => 'Budi',
            'email' => 'budi@example.com',
            'message' => 'Halo.',
        ]);

        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/contact-messages')->assertSuccessful();
    }
}
