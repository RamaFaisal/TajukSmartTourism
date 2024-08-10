<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ArticleController;
use App\Models\Article;
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

Route::get('/', function() {
    return Inertia::render('Homepage', [
        'title' => 'Tajuk Smart Tourism',
        'description' => 'Selamat Datang di TST'
    ]);
});

// Destinasi
Route::get('/Destinasi/DungKluruk', function() {
    return Inertia::render('Destinasi/DungKluruk', [
        'title' => 'Wisata DungKluruk',
        'description' => 'Selamat Datang di Wisata DungKluruk, Tajuk, Getasan'
    ]);
});

Route::get('/Destinasi/Sokowolu', function() {
    return Inertia::render('Destinasi/Sokowolu', [
        'title' => 'Wisata Sokowolu',
        'description' => 'Selamat Datang di Wisata Sokowolu, Tajuk, Getasan'
    ]);
});

Route::get('/Destinasi/Ngaduman', function() {
    return Inertia::render('Destinasi/Ngaduman', [
        'title' => 'Wisata Edukasi Ngaduman',
        'description' => 'Selamat Datang di Wisata Edukasi Ngaduman, Tajuk, Getasan'
    ]);
});

Route::get('/Destinasi/GPass', function() {
    return Inertia::render('Destinasi/GPass', [
        'title' => 'Wisata Gedong Pass',
        'description' => 'Selamat Datang di Wisata Gedong Pass, Tajuk, Getasan'
    ]);
});

// Paket
Route::get('/Paket', function() {
    return Inertia::render('Paket', [
        'title' => 'Paket Wisata',
        'description' => 'Selamat Datang di Paket Wisata Desa Tajuk'
    ]);
});

// Informasi
Route::get('/Informasi/Berita', function() {
    return Inertia::render('Informasi/Berita', [
        'title' => 'Berita Desa',
        'description' => 'Berita Desa Tajuk'
    ]);
});

// Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');

// public function show($id)
// {
//     $article = Article::findOrFail($id);
//     return Inertia::render('BeritaDetail', [
//         'article' => $article
//     ]);
// }

Route::get('/Informasi/Berita/{id}' ,function($id){
    $article = Article::findOrFail($id);
    return Inertia::render('Informasi/BeritaDetail', [
        'article' => [
            'id' => $article->id,
            'title' => $article->title,
            'content' => $article->content,
            'category' => $article->category,
            'image' => $article->image ? url('storage/' . $article->image) : null,
            'is_published' => $article->is_published,
            'created_at' => $article->created_at,
            'updated_at' => $article->updated_at,
        ]
    ]);
});

Route::get('/Informasi/Gallery', function() {
    return Inertia::render('Informasi/Gallery', [
        'title' => 'Galeri Desa',
        'description' => 'Galeri Desa Tajuk'
    ]);
});

Route::get('/Informasi/Produk', function() {
    return Inertia::render('Informasi/Produk', [
        'title' => 'Produk Desa',
        'description' => 'Produk Desa'
    ]);
});

// Dusun
Route::get('/Dusun/DusunPulihan', function() {
    return Inertia::render('Dusun/DusunPulihan', [
        'title' => 'Profile Dusun Pulihan',
        'description' => 'Profile Dusun Pulihan Desa Tajuk'
    ]);
});

Route::get('/Dusun/DusunTajuk', function() {
    return Inertia::render('Dusun/DusunTajuk', [
        'title' => 'Profile Dusun Tajuk',
        'description' => 'Profile Dusun Tajuk Desa Tajuk'
    ]);
});

Route::get('/Dusun/DusunCingklok', function() {
    return Inertia::render('Dusun/DusunCingklok', [
        'title' => 'Profile Dusun Cingklok',
        'description' => 'Profile Dusun Cingklok Desa Tajuk'
    ]);
});

// Tentang Kami
Route::get('/TentangKami/ProfileDesa', function() {
    return Inertia::render('TentangKami/ProfileDesa', [
        'title' => 'Profile Desa Tajuk',
        'description' => 'Profile Desa Wisata Tajuk'
    ]);
});

Route::get('/TentangKami/Geografi', function() {
    return Inertia::render('TentangKami/Geografi', [
        'title' => 'Profile Desa Tajuk',
        'description' => 'Profile Desa Wisata Tajuk'
    ]);
});

// Kontak
Route::get('/Contacts', function() {
    return Inertia::render('Contacts', [
        'title' => 'Kontak Kami',
        'description' => 'Hubungi Kami'
    ]);
});

// <<<<<<< feature/article
// Route::get('/', function() {
//     return redirect('/Homepage');
// });
 // >>>>>>> main

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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

Route::resource('articles', ArticleController::class)->middleware(['auth']);

require __DIR__.'/auth.php';
