@extends('layouts.admin')

@section('content')
    <div class="flex items-center mb-4">
        <!-- Tombol Back dengan SVG -->
        <a href="{{ route('articles.index') }}" class="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-700" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"></circle>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8l-4 4m0 0l4 4m-4-4h8" />
            </svg>
        </a>
        <h2 class="text-2xl font-bold">Create Article</h2>
    </div>

    <form action="{{ route('articles.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="mb-4">
            <label for="title" class="block text-gray-700">Title</label>
            <input type="text" name="title" id="title" class="input input-bordered w-full" required>
        </div>
        <div class="mb-4">
            <label for="content" class="block text-gray-700">Content</label>
            <textarea name="content" id="content" class="textarea textarea-bordered w-full"></textarea>
        </div>
        <div class="mb-4">
            <label for="category" class="block text-gray-700">Category</label>
            <select name="category" id="category" class="select select-bordered w-full">
                <option value="Desa Wisata">Desa Wisata</option>
                <option value="Event dan Acara">Event dan Acara</option>
                <option value="Destinasi Wisata">Destinasi Wisata</option>
                <option value="Kuliner Lokal">Kuliner Lokal</option>
                <option value="Budaya dan Tradisi">Budaya dan Tradisi</option>
                <option value="Akomodasi">Akomodasi</option>
                <option value="Pengalaman Wisatawan">Pengalaman Wisatawan</option>
                <option value="Paket Wisata">Paket Wisata</option>
                <option value="Lingkungan dan Konservasi">Lingkungan dan Konservasi</option>
                <option value="Tips dan Panduan Wisata">Tips dan Panduan Wisata</option>
            </select>
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

@section('scripts')
    <script src="https://cdn.ckeditor.com/ckeditor5/23.0.0/classic/ckeditor.js"></script>
    <script>
        ClassicEditor.create(document.querySelector('#content'))
            .catch(error => {
                console.error(error);
            });
    </script>
@endsection
