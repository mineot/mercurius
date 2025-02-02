<?php

namespace Database\Seeders;

use App\Models\Language;
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

        if (Profile::count() === 0) {
            Profile::create([
                'name' => 'Zé Ninguem',
                'avatar' => 'https://placehold.co/200x200/',
                'job_title' => 'Assistente de Coisa Nenhuma',
                'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas.',
            ]);

            Profile::create([
                'name' => 'Joe Doe',
                'avatar' => 'https://placehold.co/200x200/',
                'job_title' => 'Jack of No Trades',
                'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas.',
            ]);
        }
    }
}
