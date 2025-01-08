<?php

namespace App\Http\Controllers;

use App\Models\Matched;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MatchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $matches = Matched::latest()->get();
        return Inertia::render('dashboard/match', [
            'matches' => $matches
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'competition' => 'required',
            'home_team_name' => 'required',
            'home_team_flag' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'away_team_name' => 'required',
            'away_team_flag' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'match_date' => 'required|date',
            'match_time' => 'required|date_format:H:i',
            'stadium' => 'required',
            'location' => 'required',
            'status' => 'required|in:scheduled,live,completed'
        ]);

        $data = $request->except(['home_team_flag', 'away_team_flag']);

        if ($request->hasFile('home_team_flag')) {
            $path = $request->file('home_team_flag')->store('flags', 'public'); // changed 'images' to 'flags'
            $data['home_team_flag'] =  '/storage/' . $path;
        }

        if ($request->hasFile('away_team_flag')) {
            $path = $request->file('away_team_flag')->store('flags', 'public'); // changed 'images' to 'flags'
            $data['away_team_flag'] =  '/storage/' . $path;
        }

        Matched::create($data);

        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Matched $match)
    {
         $request->validate([
            'competition' => 'required',
            'home_team_name' => 'required',
            'home_team_flag' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'away_team_name' => 'required',
            'away_team_flag' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'match_date' => 'required|date',
            'match_time' => 'required|date_format:H:i',
            'stadium' => 'required',
            'location' => 'required',
            'status' => 'required|in:scheduled,live,completed'
        ]);

        $data = $request->except(['home_team_flag', 'away_team_flag']);

        if ($request->hasFile('home_team_flag')) {
            $path = $request->file('home_team_flag')->store('flags', 'public');  
            $data['home_team_flag'] =  '/storage/' . $path;
        }

        if ($request->hasFile('away_team_flag')) {
            $path = $request->file('away_team_flag')->store('flags', 'public'); 
            $data['away_team_flag'] =  '/storage/' . $path;
        }

        $match->update($data);

        return redirect()->back();
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Matched $match)
    {
        $match->delete();

        return redirect()->back();
    }
}