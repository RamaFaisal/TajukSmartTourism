@extends('layouts.admin')

@section('content')
    <h2 class="text-2xl font-bold mb-4">Create Article</h2>
    <form action="{{ route('articles.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="mb-4">
            <label for="title" class="block text-gray-700">Title</label>
            <input type="text" name="title" id="title" class="input input-bordered w-full" required>
        </div>
        <div class="mb-4">
            <label for="content" class="block text-gray-700">Content</label>
            <textarea name="content" id="content" class="textarea textarea-bordered w-full" required></textarea>
        </div>
        <div class="mb-4">
            <label for="category" class="block text-gray-700">Category</label>
            <input type="text" name="category" id="category" class="input input-bordered w-full">
        </div>
        <div class="mb-4">
            <label for="image" class="block text-gray-700">Image</label>
            <input type="file" name="image" id="image" class="input input-bordered w-full">
        </div>
        <div class="mb-4">
            <label for="is_published" class="block text-gray-700">Published</label>
            <select name="is_published" id="is_published" class="select select-bordered w-full">
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Save</button>
    </form>
@endsection
