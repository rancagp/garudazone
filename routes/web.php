<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;
use App\Http\Controllers\KabarBolaController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MatchController;
use App\Http\Controllers\PertandinganController;
use App\Http\Controllers\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/dashboard', [PostController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::resource('post', PostController::class)->middleware(['auth', 'verified']);
Route::resource('match', MatchController::class)->middleware(['auth', 'verified']);
Route::get('/dashboard/user', [UserController::class, 'index'])->middleware(['auth', 'verified'])->name('user.dashboard');
Route::delete('/dashboard/user/{user}/delete', [UserController::class, 'destroy'])->middleware(['auth', 'verified'])->name('user.delete');
Route::get('/kabar-bola', [KabarBolaController::class, 'index'])->name('kabar-bola');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/pertandingan', [PertandinganController::class, 'index'])->name('pertandingan');

Route::get('/sejarah', function () {
    return Inertia::render('Sejarah/index');
});

Route::get('/kabar-bola/{post}', [KabarBolaController::class, 'show'])->name('kabar-bola.show');

require __DIR__ . '/auth.php';