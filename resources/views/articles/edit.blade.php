@extends('layouts.admin')

@section('content')
    <h2 class="text-2xl font-bold mb-4">Edit Article</h2>
    <form action="{{ route('articles.update', $article) }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="mb-4">
            <label for="title" class="block text-gray-700">Title</label>
            <input type="text" name="title" id="title" value="{{ $article->title }}" class="input input-bordered w-full" required>
        </div>
        <div class="mb-4">
            <label for="content" class="block text-gray-700">Content</label>
            <textarea name="content" id="content" class="textarea textarea-bordered w-full" required>{{ $article->content }}</textarea>
        </div>
        <div class="mb-4">
            <label for="category" class="block text-gray-700">Category</label>
            <input type="text" name="category" id="category" value="{{ $article->category }}" class="input input-bordered w-full">
        </div>
        <div class="mb-4">
            <label for="image" class="block text-gray-700">Image</label>
            <input type="file" name="image" id="image" class="input input-bordered w-full">
            @if ($article->image)
                <img src="{{ asset('storage/' . $article->image) }}" alt="Image" class="mt-2 w-32 h-32 object-cover">
            @endif
        </div>
        <div class="mb-4">
            <label for="is_published" class="block text-gray-700">Published</label>
            <select name="is_published" id="is_published" class="select select-bordered w-full">
                <option value="1" {{ $article->is_published ? 'selected' : '' }}>Yes</option>
                <option value="0" {{ !$article->is_published ? 'selected' : '' }}>No</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
    </form>
@endsection
