<?php

namespace App\Http\Controllers;

use App\Models\Matched;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class PertandinganController extends Controller
{
     /**
      * Display a listing of the resource.
      */
    public function index(Request $request)
    {
         $now = Carbon::now();

          $liveMatch = Matched::where('status', 'live')->first();

          $nearestMatch = null;
           $scheduledMatches = [];

            if(!$liveMatch){
                $nearestMatch = Matched::where('match_date', '>=', $now)
                     ->where('status', 'scheduled')
                     ->orderBy('match_date')
                    ->orderBy('match_time')
                     ->first();
              if($nearestMatch){
                   $scheduledMatches = Matched::where('match_date', '>=', $now)
                      ->where('status', 'scheduled')
                       ->where('id', '!=', $nearestMatch->id)
                     ->orderBy('match_date')
                      ->orderBy('match_time')
                     ->get();
                  }
              }else{
                  $scheduledMatches = Matched::where('match_date', '>=', $now)
                       ->where('status', 'scheduled')
                       ->orderBy('match_date')
                      ->orderBy('match_time')
                      ->get();
              }


             $upcomingMatches =  $liveMatch ? collect([$liveMatch]) : ( $nearestMatch ? collect([$nearestMatch]) : collect() );
            $matches = Matched::where('match_date', '<=', $now)
                ->where('status','completed') // change this line
               ->latest()
                 ->get(); // remove paginate

              return Inertia::render('Match/index', [
                'matches' => $matches,
                   'nearestMatches' => $upcomingMatches,
                    'scheduledMatches' => $scheduledMatches,
                ]);
    }
}