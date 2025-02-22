<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@tajuk.com',
            'password' => Hash::make('tajukjaya001')
        ]);

        User::create([
            'name' => 'Ikan',
            'email' => 'ikan@tajuk.com',
            'password' => Hash::make('ikandimakan')
        ]);
    }
}
