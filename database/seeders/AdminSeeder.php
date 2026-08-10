<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@tajuk.com'],
            [
                'name' => 'Admin',
                'email' => 'admin@tajuk.com',
                'password' => 'password',
                'is_admin' => true,
            ]
        );
    }
}
