<?php
namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        // Menangani pencarian berdasarkan judul
        $search = $request->input('search');

        $articles = Article::query()
                ->when($search, function ($query, $search) {
                    return $query->where('title', 'like', '%' . $search . '%');
                })
                ->get();

        return view('articles.index', compact('articles'));
    }

    public function create()
    {
        return view('articles.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'category' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'is_published' => 'required|boolean',
        ]);

        $article = new Article();
        $article->title = $request->title;
        $article->content = $request->content;
        $article->category = $request->category;
        $article->is_published = $request->is_published;

        if ($request->hasFile('image')) {
            $article->image = $request->file('image')->store('images', 'public');
        }

        $article->save();

        return redirect()->route('articles.index')->with('success', 'Article created successfully.');
    }

    public function edit(Article $article)
    {
        return view('articles.edit', compact('article'));
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required',
            'category' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'is_published' => 'required|boolean',
        ]);

        $article->title = $request->title;
        $article->content = $request->content;
        $article->category = $request->category;
        $article->is_published = $request->is_published;

        if ($request->hasFile('image')) {
            $article->image = $request->file('image')->store('images', 'public');
        }

        $article->save();

        return redirect()->route('articles.index')->with('success', 'Article updated successfully.');
    }

    public function destroy(Article $article)
    {
        $article->delete();
        return redirect()->route('articles.index')->with('success', 'Article deleted successfully.');
    }
}
