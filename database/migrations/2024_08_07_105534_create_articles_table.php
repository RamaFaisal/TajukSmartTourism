<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Kolom judul artikel
            $table->text('content'); // Kolom konten artikel
            $table->string('category')->nullable(); // Kolom kategori artikel
            $table->string('image')->nullable(); // Kolom image artikel
            $table->boolean('is_published')->default(false); // Status publikasi artikel
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
