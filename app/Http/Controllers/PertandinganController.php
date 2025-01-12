<?php

namespace App\Http\Controllers;

use App\Models\Matched;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class PertandinganController extends Controller
{
    public function index(Request $request)
    {
         $now = Carbon::now();

        $liveMatch = Matched::where('status', 'live')->first();
        $nearestMatch = null;
         $scheduledMatches = [];

        if ($liveMatch) {
            $upcomingMatches = collect([$liveMatch]);
            $scheduledMatches = Matched::where('status', 'scheduled')
                ->orderBy('match_date')
                ->orderBy('match_time')
                ->get();
        } else {
            $nearestMatch = Matched::where('match_date', '>=', $now)
                 ->where('status', 'scheduled')
                ->orderBy('match_date')
                ->orderBy('match_time')
                 ->first();

           if($nearestMatch){
                 $upcomingMatches = collect([$nearestMatch]);
                  $scheduledMatches = Matched::where('status', 'scheduled')
                       ->where('id', '!=', $nearestMatch->id)
                     ->orderBy('match_date')
                      ->orderBy('match_time')
                     ->get();
             } else{
                $upcomingMatches = collect();
                $scheduledMatches = Matched::where('status', 'scheduled')
                   ->orderBy('match_date')
                  ->orderBy('match_time')
                 ->get();
            }

        }



         $matches = Matched::where('match_date', '<=', $now)
             ->where('status','completed')
            ->latest()
              ->get();

        return Inertia::render('Match/index', [
            'matches' => $matches,
            'nearestMatches' => $upcomingMatches,
            'scheduledMatches' => $scheduledMatches,
         ]);
    }
}