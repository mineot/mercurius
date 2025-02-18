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
            [
                'email' => 'admin@admin.com',
            ],
            [
                'name' => 'Administrator',
                'email' => 'admin@admin.com',
                'password' => bcrypt('Admin@123456'),
            ]
        );

        $languages = [
            [
                'name' => 'English',
                'language' => 'en',
                'country' => null,
            ],
            [
                'name' => 'Português',
                'language' => 'pt',
                'country' => null,
            ],
        ];

        foreach ($languages as $language) {
            Language::firstOrCreate(
                [
                    'language' => $language['language'],
                    'country' => $language['country'],
                ],
                $language
            );
        }

        if (Profile::count() === 0) {
            $en = Language::where('language', 'en')->first();
            $pt = Language::where('language', 'pt')->first();

            Profile::create([
                'language_id' => $pt->id,
                'name' => 'Zé Ninguem',
                'avatar' => 'https://i.pravatar.cc/1024',
                'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas.',
            ]);

            Profile::create([
                'language_id' => $en->id,
                'name' => 'Joe Doe',
                'avatar' => 'https://i.pravatar.cc/1024',
                'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas.',
            ]);
        }
    }
}
