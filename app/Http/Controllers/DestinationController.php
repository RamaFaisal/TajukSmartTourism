<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class DestinationController extends Controller
{
    public function show(Destination $destination): Response
    {
        abort_unless($destination->is_published, 404);

        return Inertia::render('Destinasi/Show', [
            'title' => 'Wisata '.$destination->name,
            'description' => 'Selamat Datang di Wisata '.$destination->name.', Tajuk, Getasan',
            'destination' => [
                'name' => $destination->name,
                'heroHeadline' => $destination->hero_headline,
                'heroImage' => $destination->hero_image_src,
                'body' => $destination->body,
                'hours' => $destination->hours,
                'price' => $destination->price,
                'priceNote' => $destination->price_note,
                'facilities' => $destination->facilities ?? [],
            ],
            'destinations' => $this->destinationCards(),
        ]);
    }

    public static function destinationCards()
    {
        return Destination::published()
            ->orderBy('sort_order')
            ->get()
            ->map(fn (Destination $item): array => [
                'title' => $item->name,
                'image' => $item->card_image_src,
                'description' => Str::limit(strip_tags($item->body), 140),
                'lat' => $item->lat,
                'lng' => $item->lng,
                'link' => '/destinasi/'.$item->slug,
            ]);
    }
}
