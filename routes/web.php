<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/dashboard', [PostController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::post('/dashboard/post/{post}/edit', [PostController::class, 'update'])->middleware(['auth', 'verified'])->name('post.update');

Route::get('/dashboard/user', function () {
    return Inertia::render('dashboard/user');
})->middleware(['auth', 'verified'])->name('user.dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/pertandingan', function () {
    return Inertia::render('Match/index');
});

Route::get('/sejarah', function () {
    return Inertia::render('Sejarah/index');
});

Route::get('/kabar-bola', function () {
    return Inertia::render('KabarBola/index');
});

Route::get('/kabar-bola/slug', function () {
    return Inertia::render('KabarBola/page');
});


require __DIR__ . '/auth.php';
