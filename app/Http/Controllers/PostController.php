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

    public function update(Request $request)
    {
        dd($request);
        $validatedData = $request->validate([
            'author' => 'required|integer',
            'title' => 'required|string',
            'content' => 'required|string'
        ]);

        Post::updated([
            'author' => $validatedData['author'],
            'title' => $validatedData['title'],
            'content' => $validatedData['content'],
        ]);
    }

    public function destroy(Post $post)
    {
        //
    }
}
