<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $now = now();

        User::firstOrCreate(
            ['email' => 'admin@admin.com'],
            [
                'name' => 'Administrator',
                'email' => 'admin@admin.com',
                'password' => bcrypt('Admin@123456'),
            ]
        );

        $languages = [
            [
                'name' => 'English',
                'code' => 'en',
                'country' => null,
            ],
            [
                'name' => 'Português',
                'code' => 'pt',
                'country' => null,
            ],
        ];

        foreach ($languages as $language) {
            Language::firstOrCreate(
                ['code' => $language['code'], 'country' => $language['country']], // 🔍 Verifica pelo código e país
                $language
            );
        }
    }
}
