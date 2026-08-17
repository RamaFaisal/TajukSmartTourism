<?php

use App\Http\Controllers\ContactMessageController;
use App\Http\Controllers\DestinationController;
use App\Http\Controllers\HamletController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

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

Route::get('/sitemap.xml', [SitemapController::class, 'index'])->name('sitemap');

// Destinasi
Route::get('/destinasi/{destination:slug}', [DestinationController::class, 'show'])->name('destinations.show');

Route::get('/Destinasi/{legacy}', [PageController::class, 'legacyDestination']);

// Paket
Route::get('/Paket', [PageController::class, 'paket'])->name('paket.index');

Route::get('/Paket/FormLiveIn{form}', [PageController::class, 'liveInForm'])
    ->whereIn('form', ['1', '2', '3'])
    ->name('paket.live-in-form');

// Informasi
Route::get('/Informasi/Berita', [PageController::class, 'newsIndex'])->name('news.index');

Route::get('/Informasi/Berita/{id}', [PageController::class, 'newsShow'])->name('news.show');

Route::get('/Informasi/Gallery', [PageController::class, 'gallery'])->name('gallery.index');

Route::get('/Informasi/Produk', [PageController::class, 'product'])->name('product.index');

// Dusun
Route::get('/dusun/{hamlet:slug}', [HamletController::class, 'show'])->name('hamlets.show');

Route::get('/Dusun/{legacy}', [PageController::class, 'legacyHamlet']);

// Tentang Kami
Route::get('/TentangKami/ProfileDesa', [PageController::class, 'profile'])->name('about.profile');

Route::get('/TentangKami/Geografi', [PageController::class, 'geography'])->name('about.geography');

// Kontak
Route::get('/Contacts', [PageController::class, 'contact'])->name('contact.index');

Route::post('/submit-message', [ContactMessageController::class, 'store'])->name('submit.message');
