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
                [
                    'code' => $language['code'],
                    'country' => $language['country'],
                ],
                $language
            );
        }

        if (Profile::count() === 0) {
            $en = Language::where('code', 'en')->first();
            $pt = Language::where('code', 'pt')->first();

            Profile::create([
                'language_id' => $pt->id,
                'name' => 'Zé Ninguem',
                'avatar' => 'https://placehold.co/200x200/',
                'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas.',
                'job_title' => 'Assistente de Coisa Nenhuma',
                'job_avatar' => 'https://placehold.co/600x600/',
                'job_description' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit quasi tenetur. Neque, quas veritatis est minus, asperiores, in modi culpa exercitationem delectus ea aut explicabo architecto corrupti debitis eum.',
            ]);

            Profile::create([
                'language_id' => $en->id,
                'name' => 'Joe Doe',
                'avatar' => 'https://placehold.co/200x200/',
                'summary' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptas.',
                'job_title' => 'Jack of No Trades',
                'job_avatar' => 'https://placehold.co/600x600/',
                'job_description' => 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam impedit quasi tenetur. Neque, quas veritatis est minus, asperiores, in modi culpa exercitationem delectus ea aut explicabo architecto corrupti debitis eum.',
            ]);
        }
    }
}
