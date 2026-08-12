<?php

namespace App\Http\Controllers;

use App\Models\Hamlet;
use App\Models\Video;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $data = Cache::remember('homepage_data', 600, function (): array {
            return [
                'hamlets' => Hamlet::published()
                    ->orderBy('sort_order')
                    ->get()
                    ->map(fn (Hamlet $hamlet): array => [
                        'imageUrl' => $hamlet->card_image_src,
                        'title' => $hamlet->name,
                        'link' => '/dusun/'.$hamlet->slug,
                    ]),
                'destinations' => DestinationController::destinationCards(),
                'videos' => Video::published()
                    ->orderBy('sort_order')
                    ->get()
                    ->map(fn (Video $video): array => [
                        'id' => $video->youtube_id,
                        'title' => $video->title,
                    ]),
            ];
        });

        return Inertia::render('Homepage', [
            'title' => 'Tajuk Smart Tourism',
            'description' => 'Selamat Datang di TST',
            ...$data,
        ]);
    }
}
