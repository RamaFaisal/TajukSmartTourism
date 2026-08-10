<?php

namespace App\Http\Controllers;

use App\Models\Hamlet;
use Inertia\Inertia;
use Inertia\Response;

class HamletController extends Controller
{
    public function show(Hamlet $hamlet): Response
    {
        abort_unless($hamlet->is_published, 404);

        return Inertia::render('Dusun/Show', [
            'title' => 'Profil '.$hamlet->name,
            'description' => 'Profil '.$hamlet->name.' Desa Tajuk',
            'hamlet' => [
                'name' => $hamlet->name,
                'heroHeadline' => $hamlet->hero_headline,
                'heroImage' => $hamlet->hero_image_src,
                'body' => $hamlet->body,
            ],
            'hamlets' => Hamlet::published()
                ->orderBy('sort_order')
                ->get()
                ->map(fn (Hamlet $item): array => [
                    'imageUrl' => $item->card_image_src,
                    'title' => $item->name,
                    'link' => '/dusun/'.$item->slug,
                ]),
        ]);
    }
}
