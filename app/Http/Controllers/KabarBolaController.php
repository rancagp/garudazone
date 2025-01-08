<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post; 

class KabarBolaController extends Controller
{
    public function index(Request $request)
    {
        $perPage = 8;
        $search = $request->input('search');

        $query = Post::with('author')->latest();

         if ($search) {
            $query->where('title', 'like', '%' . $search . '%')
                 ->orWhere('content', 'like', '%' . $search . '%');
         }

        $posts = $query->paginate($perPage)->withQueryString();

         return Inertia::render('KabarBola/index', [
           'posts' => $posts,
            'filters' => $request->only(['search'])
        ]);
    }

    public function show(Post $post)
{
    return Inertia::render('KabarBola/page', [
        'post' => $post->load('author')
    ]);
}
}