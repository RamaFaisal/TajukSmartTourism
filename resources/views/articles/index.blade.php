@extends('layouts.admin')

@section('content')
    <h2 class="text-2xl font-bold mb-4">Articles</h2>
    <a href="{{ route('articles.create') }}" class="btn btn-primary mb-4">Create New Article</a>
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    <table class="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
            <tr>
                <th class="px-4 py-2">ID</th>
                <th class="px-4 py-2">Title</th>
                <th class="px-4 py-2">Category</th>
                <th class="px-4 py-2">Published</th>
                <th class="px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($articles as $article)
                <tr>
                    <td class="border px-4 py-2">{{ $article->id }}</td>
                    <td class="border px-4 py-2">{{ $article->title }}</td>
                    <td class="border px-4 py-2">{{ $article->category }}</td>
                    <td class="border px-4 py-2">{{ $article->is_published ? 'Yes' : 'No' }}</td>
                    <td class="border px-4 py-2">
                        <a href="{{ route('articles.edit', $article) }}" class="btn btn-info">Edit</a>
                        <form action="{{ route('articles.destroy', $article) }}" method="POST" style="display:inline;">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn bg-red-500 hover:bg-red-700 text-dark">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
@endsection
