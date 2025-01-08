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
       // $validatedData = $request->validate([
       //     'author' => 'required|integer',
       //    'title' => 'required|string',
        //    'content' => 'required|string',
        //    'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
       // ]);

        $author = $request->input('author');
        $title = $request->input('title');
         $content = $request->input('content');
         $image = $request->file('image');
       $imagePath = null;

          if ($image) {
               $imagePath =  '/storage/' . $image->store('posts', 'public');
           }

        Post::create([
               'author' => $author,
              'title' =>  $title,
               'content' => $content,
               'image' => $imagePath,
           ]);


       return redirect()->back()->with('success', 'Post berhasil ditambahkan.');
   }

   public function update(Request $request, Post $post)
   {
        Log::info('Data received for update:', $request->all());
        // $validatedData = $request->validate([
        //    'title' => 'required|string',
        //    'content' => 'required|string',
        //    'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        // ]);

       $title = $request->input('title');
         $content = $request->input('content');
         $image = $request->file('image');

        $imagePath = $post->image;

        if ($image) {
            // Hapus gambar lama jika ada
           if ($post->image) {
               Storage::disk('public')->delete(str_replace('/storage/', '', $post->image));
           }
            $imagePath = '/storage/' . $image->store('posts', 'public');
        }

       $post->update([
               'title' =>  $title,
               'content' => $content,
                'image' => $imagePath,
           ]);

       return redirect()->back()->with('success', 'Post berhasil diupdate.');
   }

   public function destroy(Post $post)
   {
        if ($post->image) {
           Storage::disk('public')->delete(str_replace('/storage/', '', $post->image));
        }

        $post->delete();

        return redirect()->back()->with('success', 'Post berhasil dihapus.');
   }
}