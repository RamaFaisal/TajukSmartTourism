@extends('layouts.admin')

@section('content')
    <div class="flex justify-between items-center mb-6">
        <h2 class="text-4xl font-bold">Articles</h2>
        <form action="{{ route('articles.index') }}" method="GET" class="flex items-center space-x-2">
            <input type="text" name="search" placeholder="Search by title..."
                class="px-4 py-2 rounded-md border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 bg-transparent text-gray-700 placeholder-gray-400">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
                Search
            </button>
        </form>
        <a href="{{ route('articles.create') }}"
            class="flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-6 rounded-md shadow-lg transform hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            Create New Article
        </a>
    </div>

    @if (session('success'))
        <div class="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-3 rounded-md shadow-md mb-6">
            <strong>Success!</strong> {{ session('success') }}
        </div>
    @endif

    <div class="overflow-x-auto bg-white bg-opacity-90 rounded-lg shadow-lg">
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="px-4 py-3 text-left font-semibold">ID</th>
                    <th class="px-4 py-3 text-left font-semibold">Title</th>
                    <th class="px-4 py-3 text-left font-semibold">Category</th>
                    <th class="px-4 py-3 text-center font-semibold">Published</th>
                    <th class="px-4 py-3 text-center font-semibold">Actions</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($articles as $article)
                    <tr class="bg-white bg-opacity-5 border-b hover:bg-[#fff9c4] transition-colors">
                        <td class="px-4 py-3 text-gray-800 font-medium">{{ $article->id }}</td>
                        <td class="px-4 py-3 text-gray-800 font-medium">{{ $article->title }}</td>
                        <td class="px-4 py-3 text-gray-800 font-medium">{{ $article->category }}</td>
                        <td class="px-4 py-3 text-center">
                            @if ($article->is_published)
                                <span
                                    class="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">Yes</span>
                            @else
                                <span class="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">No</span>
                            @endif
                        </td>
                        <td class="px-4 py-3 text-center">
                            <div class="flex justify-center space-x-2">
                                <a href="{{ route('articles.edit', $article) }}"
                                    class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-md shadow-md transform hover:scale-105 transition-transform flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </a>
                                <form action="{{ route('articles.destroy', $article) }}" method="POST" class="inline-block"
                                    onsubmit="return confirm('Apakah Anda yakin ingin menghapus artikel ini?');">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit"
                                        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-md transform hover:scale-105 transition-transform flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
