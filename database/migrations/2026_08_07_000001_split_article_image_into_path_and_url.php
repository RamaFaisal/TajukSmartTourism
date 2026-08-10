<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->renameColumn('image', 'image_path');
        });

        Schema::table('articles', function (Blueprint $table) {
            $table->string('image_url')->nullable()->after('image_path');
        });

        DB::table('articles')
            ->where('image_path', 'like', 'http%')
            ->update([
                'image_url' => DB::raw('image_path'),
                'image_path' => null,
            ]);
    }

    public function down(): void
    {
        DB::table('articles')
            ->whereNotNull('image_url')
            ->update(['image_path' => DB::raw('image_url')]);

        Schema::table('articles', function (Blueprint $table) {
            $table->dropColumn('image_url');
        });

        Schema::table('articles', function (Blueprint $table) {
            $table->renameColumn('image_path', 'image');
        });
    }
};
