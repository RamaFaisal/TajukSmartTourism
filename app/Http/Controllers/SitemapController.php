<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Destination;
use App\Models\Hamlet;
use Illuminate\Http\Response as HttpResponse;
use Illuminate\Support\Facades\Cache;

class SitemapController extends Controller
{
    public function index(): HttpResponse
    {
        $urls = Cache::remember('sitemap_urls', 600, function (): array {
            return collect([
                '/',
                '/Paket',
                '/Informasi/Berita',
                '/Informasi/Gallery',
                '/Informasi/Produk',
                '/TentangKami/ProfileDesa',
                '/TentangKami/Geografi',
                '/Contacts',
            ])
                ->concat(Hamlet::published()->pluck('slug')->map(fn (string $slug): string => '/dusun/'.$slug))
                ->concat(Destination::published()->pluck('slug')->map(fn (string $slug): string => '/destinasi/'.$slug))
                ->concat(Article::published()->pluck('id')->map(fn (int $id): string => '/Informasi/Berita/'.$id))
                ->map(fn (string $path): string => url($path))
                ->unique()
                ->values()
                ->all();
        });

        $xml = '<?xml version="1.0" encoding="UTF-8"?>'."\n"
            .'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\n";

        foreach ($urls as $url) {
            $xml .= '  <url><loc>'.e($url).'</loc></url>'."\n";
        }

        $xml .= '</urlset>'."\n";

        return response($xml)->header('Content-Type', 'application/xml');
    }
}
