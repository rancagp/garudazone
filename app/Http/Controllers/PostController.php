<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('author')->get();

        return Inertia::render('dashboard/post', [
            'posts' => $posts
        ]);
    }

    public function store(Request $request)
    {
        Log::info('Data received for store:', $request->all());
        $validatedData = $request->validate([
             'author' => 'required|integer',
            'title' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

         $image = $request->file('image');
        $imagePath = null;

        if ($image) {
            $imagePath =  '/storage/' . $image->store('posts', 'public');
        }

        Post::create([
            'author' => $validatedData['author'],
            'title' =>  $validatedData['title'],
            'content' => $validatedData['content'],
            'image' => $imagePath,
        ]);


        return redirect()->back()->with('success', 'Post berhasil ditambahkan.');
    }

    public function update(Request $request, Post $post)
    {
        Log::info('Data received for update:', $request->all());
        
        $validatedData = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
    
        try {
            $image = $request->file('image');
            $imagePath = $post->image; // Gunakan image yang ada jika tidak ada upload baru
    
            if ($image) {
                // Hapus gambar lama jika ada
                if ($post->image && Storage::disk('public')->exists(str_replace('/storage/', '', $post->image))) {
                    Storage::disk('public')->delete(str_replace('/storage/', '', $post->image));
                }
                $imagePath = '/storage/' . $image->store('posts', 'public');
            }
    
            $post->update([
                'title' => $validatedData['title'],
                'content' => $validatedData['content'],
                'image' => $imagePath,
            ]);
    
            return response()->json(['message' => 'Post updated successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error updating post: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to update post'], 500);
        }
    }

    public function destroy(Post $post)
    {
       if ($post->image && Storage::disk('public')->exists(str_replace('/storage/', '', $post->image))) {
           Storage::disk('public')->delete(str_replace('/storage/', '', $post->image));
        }


        $post->delete();

        return redirect()->back()->with('success', 'Post berhasil dihapus.');
    }
}