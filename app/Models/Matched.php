<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matched extends Model
{
    use HasFactory;
  protected $table = 'matches'; 
     protected $fillable = [
        'competition',
        'home_team_name',
        'home_team_flag',
        'away_team_name',
        'away_team_flag',
        'match_date',
       'match_time',
        'stadium',
        'location',
        'status',
        'home_score',
        'away_score'
      ];
}
