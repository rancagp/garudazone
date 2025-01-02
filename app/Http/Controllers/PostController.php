<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('author')->get();

        return Inertia::render('dashboard/post', [
            'posts' => $posts
        ]);
    }
}
