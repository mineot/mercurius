<?php

namespace Database\Seeders;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(
            [
                'email' => 'admin@admin.com',
            ],
            [
                'name' => 'Administrator',
                'email' => 'admin@admin.com',
                'password' => bcrypt('Admin@123456'),
            ]
        );

        Profile::create([
            'name' => 'Joe Doe',
            'avatar' => 'https://i.pravatar.cc/1024',
            'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            'lang' => 'en',
        ]);

        Profile::create([
            'name' => 'João Ninguém',
            'avatar' => 'https://i.pravatar.cc/1024',
            'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            'lang' => 'pt',
        ]);
    }
}
