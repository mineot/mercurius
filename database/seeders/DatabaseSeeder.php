<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('admin@123456'),
        ]);
        $this->call(LanguageSeeder::class);
        $this->call(TermPTSeeder::class);
        $this->call(TermENSeeder::class);
        $this->call(ProfilePTSeeder::class);
        $this->call(ProfileENSeeder::class);
    }
}
