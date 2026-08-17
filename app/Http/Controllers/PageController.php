<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\GalleryPhoto;
use App\Models\Product;
use App\Models\Setting;
use App\Models\TourPackage;
use App\Models\Video;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('Dashboard');
    }

    public function paket(): Response
    {
        $packages = TourPackage::published()
            ->orderBy('sort_order')
            ->get()
            ->map(fn (TourPackage $package): array => [
                'id' => $package->id,
                'title' => $package->name,
                'price' => $package->price,
                'duration' => $package->duration,
                'description' => $package->description,
                'perks' => $package->facilities ?? [],
                'image' => $package->image_src,
            ]);

        return Inertia::render('Paket', [
            'title' => 'Paket Wisata',
            'description' => 'Selamat Datang di Paket Wisata Desa Tajuk',
            'packages' => $packages,
            'whatsapp' => Setting::current()->whatsapp ?: '6283831597088',
            'destinations' => DestinationController::destinationCards(),
        ]);
    }

    public function liveInForm(string $form): Response
    {
        abort_unless(in_array($form, ['1', '2', '3'], true), 404);

        return Inertia::render('Paket/FormLiveIn'.$form, [
            'title' => 'Form Live In '.$form,
            'description' => 'Form Live In '.$form,
        ]);
    }

    public function newsIndex(): Response
    {
        return Inertia::render('Informasi/Berita', [
            'title' => 'Berita Desa',
            'description' => 'Berita Desa Tajuk',
        ]);
    }

    public function newsShow(int $id): Response
    {
        $article = Article::published()->findOrFail($id);

        return Inertia::render('Informasi/BeritaDetail', [
            'article' => [
                'id' => $article->id,
                'title' => $article->title,
                'content' => $article->content,
                'category' => $article->category,
                'image' => $article->image_src,
                'is_published' => $article->is_published,
                'created_at' => $article->created_at,
                'updated_at' => $article->updated_at,
            ],
        ]);
    }

    public function gallery(): Response
    {
        return Inertia::render('Informasi/Gallery', [
            'title' => 'Galeri Desa',
            'description' => 'Galeri Desa Tajuk',
            'photos' => GalleryPhoto::published()
                ->orderBy('sort_order')
                ->get()
                ->map(fn (GalleryPhoto $photo): array => [
                    'src' => $photo->image_src,
                    'link' => $photo->link,
                    'title' => $photo->title,
                ]),
        ]);
    }

    public function product(): Response
    {
        return Inertia::render('Informasi/Produk', [
            'title' => 'Produk Desa',
            'description' => 'Produk Desa',
            'categories' => Product::categoryLabels(),
            'products' => Product::published()
                ->orderBy('sort_order')
                ->get()
                ->map(fn (Product $product): array => [
                    'name' => $product->name,
                    'description' => $product->description,
                    'image' => $product->image_src,
                    'category' => $product->category,
                    'link' => $product->external_url,
                ]),
        ]);
    }

    public function profile(): Response
    {
        return Inertia::render('TentangKami/ProfileDesa', [
            'title' => 'Profile Desa Tajuk',
            'description' => 'Profile Desa Wisata Tajuk',
            'videos' => Video::published()
                ->orderBy('sort_order')
                ->get()
                ->map(fn (Video $video): array => [
                    'id' => $video->youtube_id,
                    'title' => $video->title,
                ]),
        ]);
    }

    public function geography(): Response
    {
        return Inertia::render('TentangKami/Geografi', [
            'title' => 'Profile Desa Tajuk',
            'description' => 'Profile Desa Wisata Tajuk',
        ]);
    }

    public function contact(): Response
    {
        return Inertia::render('Contacts', [
            'title' => 'Kontak Kami',
            'description' => 'Hubungi Kami',
        ]);
    }

    public function legacyDestination(string $legacy): RedirectResponse
    {
        return redirect()->route('destinations.show', Str::slug($legacy), 301);
    }

    public function legacyHamlet(string $legacy): RedirectResponse
    {
        return redirect()->route('hamlets.show', Str::slug(Str::after($legacy, 'Dusun')), 301);
    }
}
