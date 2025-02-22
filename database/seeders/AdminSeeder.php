<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
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
