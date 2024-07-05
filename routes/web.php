<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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

Route::get('/Homepage', function() {
    return Inertia::render('Homepage', [
        'title' => 'Tajuk Smart Tourism',
        'description' => 'Selamat Datang di TST'
    ]);
});

Route::get('/DungKluruk', function() {
    return Inertia::render('DungKluruk', [
        'title' => 'Wisata DungKluruk',
        'description' => 'Selamat Datang di Wisata DungKluruk, Tajuk, Getasan'
    ]);
});

Route::get('/Tiamo', function() {
    return Inertia::render('Tiamo', [
        'title' => 'Wisata Tiamo',
        'description' => 'Selamat Datang di Wisata Tiamo, Tajuk, Getasan'
    ]);
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
