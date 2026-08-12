<?php

use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\HamletController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Models\Article;
use App\Models\Destination;
use App\Models\Hamlet;
use App\Models\Setting;
use App\Models\TourPackage;
use App\Models\Video;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/sitemap.xml', function () {
    $urls = Cache::remember('sitemap_urls', 600, function () {
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
            ->values();
    });

    $xml = '<?xml version="1.0" encoding="UTF-8"?>'."\n"
        .'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\n";

    foreach ($urls as $url) {
        $xml .= '  <url><loc>'.e($url).'</loc></url>'."\n";
    }

    $xml .= '</urlset>'."\n";

    return response($xml)->header('Content-Type', 'application/xml');
});

// Destinasi
Route::get('/destinasi/{destination:slug}', [DestinationController::class, 'show'])->name('destinations.show');

Route::get('/Destinasi/{legacy}', function (string $legacy) {
    return redirect()->route('destinations.show', Str::slug($legacy), 301);
});

// Paket
Route::get('/Paket', function () {
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
});

//Form
Route::get('/Paket/FormLiveIn1', function () {
    return Inertia::render('Paket/FormLiveIn1', [
        'title' => 'Form Live In 1',
        'description' => 'Form Live In 1',
    ]);
});

Route::get('/Paket/FormLiveIn2', function () {
    return Inertia::render('Paket/FormLiveIn2', [
        'title' => 'Form Live In 1',
        'description' => 'Form Live In 1',
    ]);
});

Route::get('/Paket/FormLiveIn3', function () {
    return Inertia::render('Paket/FormLiveIn3', [
        'title' => 'Form Live In 1',
        'description' => 'Form Live In 1',
    ]);
});

// Informasi
Route::get('/Informasi/Berita', function () {
    return Inertia::render('Informasi/Berita', [
        'title' => 'Berita Desa',
        'description' => 'Berita Desa Tajuk',
    ]);
});

Route::get('/Informasi/Berita/{id}', function ($id) {
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
});

Route::get('/Informasi/Gallery', function () {
    return Inertia::render('Informasi/Gallery', [
        'title' => 'Galeri Desa',
        'description' => 'Galeri Desa Tajuk',
    ]);
});

Route::get('/Informasi/Produk', function () {
    return Inertia::render('Informasi/Produk', [
        'title' => 'Produk Desa',
        'description' => 'Produk Desa',
    ]);
});

// Dusun
Route::get('/dusun/{hamlet:slug}', [HamletController::class, 'show'])->name('hamlets.show');

Route::get('/Dusun/{legacy}', function (string $legacy) {
    return redirect()->route('hamlets.show', Str::slug(Str::after($legacy, 'Dusun')), 301);
});

// Tentang Kami
Route::get('/TentangKami/ProfileDesa', function () {
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
});

Route::get('/TentangKami/Geografi', function () {
    return Inertia::render('TentangKami/Geografi', [
        'title' => 'Profile Desa Tajuk',
        'description' => 'Profile Desa Wisata Tajuk',
    ]);
});

// Kontak
Route::get('/Contacts', function () {
    return Inertia::render('Contacts', [
        'title' => 'Kontak Kami',
        'description' => 'Hubungi Kami',
    ]);
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::post('/submit-message', [ContactMessageController::class, 'store'])->name('submit.message');
