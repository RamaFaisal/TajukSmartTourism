<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->string('hours')->nullable()->after('body');
            $table->string('price')->nullable()->after('hours');
            $table->string('price_note')->nullable()->after('price');
            $table->json('facilities')->nullable()->after('price_note');
        });
    }

    public function down(): void
    {
        Schema::table('destinations', function (Blueprint $table) {
            $table->dropColumn(['hours', 'price', 'price_note', 'facilities']);
        });
    }
};
