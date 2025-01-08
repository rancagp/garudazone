<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->id();
            $table->string('competition');
            $table->string('home_team_name');
            $table->string('home_team_flag');
            $table->string('away_team_name');
            $table->string('away_team_flag');
            $table->date('match_date');
            $table->time('match_time');
            $table->string('stadium');
            $table->string('location');
            $table->enum('status', ['scheduled', 'live', 'completed'])->default('scheduled');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('matches');
    }
};