<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Video;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class VideoTest extends TestCase
{
    use RefreshDatabase;

    public function test_youtube_id_is_extracted_from_full_url(): void
    {
        $video = Video::factory()->create([
            'youtube_url' => 'https://www.youtube.com/watch?v=DN3IuwHTcoc',
        ]);

        $this->assertSame('DN3IuwHTcoc', $video->youtube_id);
    }

    public function test_youtube_id_accepts_bare_id(): void
    {
        $video = Video::factory()->create([
            'youtube_url' => 'DN3IuwHTcoc',
        ]);

        $this->assertSame('DN3IuwHTcoc', $video->youtube_id);
    }

    public function test_published_scope_hides_drafts(): void
    {
        Video::factory()->count(2)->create();
        Video::factory()->count(3)->create(['is_published' => false]);

        $this->assertSame(2, Video::published()->count());
    }

    public function test_admin_can_open_the_video_list(): void
    {
        $admin = User::factory()->admin()->create();

        $this->actingAs($admin)->get('/admin/videos')->assertSuccessful();
    }
}
