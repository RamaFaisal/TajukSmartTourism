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
Route::get('/destinasi/dungKluruk', function() {
    return Inertia::render('Destinasi/DungKluruk', [
        'title' => 'Wisata DungKluruk',
        'description' => 'Selamat Datang di Wisata DungKluruk, Tajuk, Getasan'
    ]);
});

Route::get('/destinasi/sokowolu', function() {
    return Inertia::render('Destinasi/Sokowolu', [
        'title' => 'Wisata Sokowolu',
        'description' => 'Selamat Datang di Wisata Sokowolu, Tajuk, Getasan'
    ]);
});

Route::get('/destinasi/ngaduman', function() {
    return Inertia::render('Destinasi/Ngaduman', [
        'title' => 'Wisata Edukasi Ngaduman',
        'description' => 'Selamat Datang di Wisata Edukasi Ngaduman, Tajuk, Getasan'
    ]);
});

Route::get('/destinasi/gpass', function() {
    return Inertia::render('Destinasi/GPass', [
        'title' => 'Wisata Gedong Pass',
        'description' => 'Selamat Datang di Wisata Gedong Pass, Tajuk, Getasan'
    ]);
});

// Paket
Route::get('/paket', function() {
    return Inertia::render('Paket', [
        'title' => 'Paket Wisata',
        'description' => 'Selamat Datang di Paket Wisata Desa Tajuk'
    ]);
});

//Form
Route::get('/paket/formlivein1', function () {
    return Inertia::render('Paket/FormLiveIn1', [
        'title' => 'Form Live In 1',
        'description' => 'Form Live In 1'
    ]);
});

Route::get('/paket/formlivein2', function () {
    return Inertia::render('Paket/FormLiveIn2', [
        'title' => 'Form Live In 1',
        'description' => 'Form Live In 1'
    ]);
});

Route::get('/paket/formlivein3', function () {
    return Inertia::render('Paket/FormLiveIn3', [
        'title' => 'Form Live In 1',
        'description' => 'Form Live In 1'
    ]);
});

// Informasi
Route::get('/informasi/berita', function() {
    return Inertia::render('Informasi/Berita', [
        'title' => 'Berita Desa',
        'description' => 'Berita Desa Tajuk'
    ]);
});

//AR
Route::get('/AR', function () {
    return view('ARv1/index');
});


// Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');

// public function show($id)
// {
//     $article = Article::findOrFail($id);
//     return Inertia::render('BeritaDetail', [
//         'article' => $article
//     ]);
// }

Route::get('/informasi/berita/{id}' ,function($id){
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

Route::get('/informasi/gallery', function() {
    return Inertia::render('Informasi/Gallery', [
        'title' => 'Galeri Desa',
        'description' => 'Galeri Desa Tajuk'
    ]);
});

Route::get('/informasi/produk', function() {
    return Inertia::render('Informasi/Produk', [
        'title' => 'Produk Desa',
        'description' => 'Produk Desa'
    ]);
});

// Dusun
Route::get('/dusun/dusunpulihan', function() {
    return Inertia::render('Dusun/DusunPulihan', [
        'title' => 'Profile Dusun Pulihan',
        'description' => 'Profile Dusun Pulihan Desa Tajuk'
    ]);
});

Route::get('/dusun/dusuntajuk', function() {
    return Inertia::render('Dusun/DusunTajuk', [
        'title' => 'Profile Dusun Tajuk',
        'description' => 'Profile Dusun Tajuk Desa Tajuk'
    ]);
});

Route::get('/dusun/dusunpuyang', function() {
    return Inertia::render('Dusun/DusunPuyang', [
        'title' => 'Profile Dusun Puyang',
        'description' => 'Profile Dusun Puyang Desa Tajuk'
    ]);
});

Route::get('/dusun/dusuncingklok', function() {
    return Inertia::render('Dusun/DusunCingklok', [
        'title' => 'Profile Dusun Cingklok',
        'description' => 'Profile Dusun Cingklok Desa Tajuk'
    ]);
});

Route::get('/dusun/dusunngaduman', function() {
    return Inertia::render('Dusun/DusunNgaduman', [
        'title' => 'Profile Dusun Ngaduman',
        'description' => 'Profile Dusun Ngaduman Desa Tajuk'
    ]);
});

Route::get('/dusun/dusunmacanan', function() {
    return Inertia::render('Dusun/DusunMacanan', [
        'title' => 'Profile Dusun Macanan',
        'description' => 'Profile Dusun Macanan Desa Tajuk'
    ]);
});

Route::get('/dusun/dusunNgroto', function() {
    return Inertia::render('Dusun/DusunNgroto', [
        'title' => 'Profile Dusun Ngroto',
        'description' => 'Profile Dusun Ngroto Desa Tajuk'
    ]);
});

Route::get('/dusun/dusunbanaran', function() {
    return Inertia::render('Dusun/DusunBanaran', [
        'title' => 'Profile Dusun Banaran',
        'description' => 'Profile Dusun Banaran Desa Tajuk'
    ]);
});

Route::get('/dusun/dusunsokowolu', function() {
    return Inertia::render('Dusun/DusunSokowolu', [
        'title' => 'Profile Dusun Sokowolu',
        'description' => 'Profile Dusun Sokowolu Desa Tajuk'
    ]);
});

Route::get('/dusun/dusungedong', function() {
    return Inertia::render('Dusun/DusunGedong', [
        'title' => 'Profile Dusun Gedong',
        'description' => 'Profile Dusun Gedong Desa Tajuk'
    ]);
});

Route::get('/dusun/dusunkaliajeng', function() {
    return Inertia::render('Dusun/DusunKaliajeng', [
        'title' => 'Profile Dusun Kaliajeng',
        'description' => 'Profile Dusun Kaliajeng Desa Tajuk'
    ]);
});

// Tentang Kami
Route::get('/tentangkami/profiledesa', function() {
    return Inertia::render('TentangKami/ProfileDesa', [
        'title' => 'Profile Desa Tajuk',
        'description' => 'Profile Desa Wisata Tajuk'
    ]);
});

Route::get('/tentangkami/geografi', function() {
    return Inertia::render('TentangKami/Geografi', [
        'title' => 'Profile Desa Tajuk',
        'description' => 'Profile Desa Wisata Tajuk'
    ]);
});

// Kontak
Route::get('/contacts', function() {
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
