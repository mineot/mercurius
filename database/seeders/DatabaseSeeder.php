<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = new User();
        $user->name = 'Administrator';
        $user->email = 'admin@admin.com';
        $user->password = bcrypt('Admin@123456');
        $user->save();
    }
}
