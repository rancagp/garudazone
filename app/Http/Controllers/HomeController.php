<?php

namespace App\Http\Controllers;

use App\Models\Matched;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Foundation\Application;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;


class HomeController extends Controller
{
    public function index()
    {
        // Ambil pertandingan dengan status 'live'
        $liveMatch = Matched::where('status', 'live')->first();

        // Jika tidak ada pertandingan live, ambil pertandingan 'scheduled' terdekat
        if (!$liveMatch) {
            $liveMatch = Matched::where('status', 'scheduled')
                ->orderBy('match_date', 'asc')
                ->orderBy('match_time', 'asc')
                ->first();
        }

        // Ambil semua pertandingan dengan status 'completed'
        $completedMatches = Matched::where('status', 'completed')
            ->orderBy('match_date', 'desc')
            ->orderBy('match_time', 'desc')
            ->get();

        // Format tanggal dan waktu
        if ($liveMatch) {
            $liveMatch->formatted_date = Carbon::parse($liveMatch->match_date)->format('d M');
            $liveMatch->formatted_year = Carbon::parse($liveMatch->match_date)->format('Y');
        }


        foreach ($completedMatches as $match) {
            $match->formatted_date = Carbon::parse($match->match_date)->format('d M');
            $match->formatted_year = Carbon::parse($match->match_date)->format('Y');
        }

        // Ambil 6 postingan berita terbaru
        $latestPosts = Post::latest()->take(6)->get();

        return Inertia::render('Welcome', [
            'liveMatch' => $liveMatch,
            'completedMatches' => $completedMatches,
            'latestPosts' => $latestPosts,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}