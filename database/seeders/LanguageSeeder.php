<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $language = new Language();
        $language->code = 'pt-BR';
        $language->shortcode = 'br';
        $language->name = 'Português Brasil';
        $language->flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png';
        $language->save();

        $language = new Language();
        $language->code = 'en-US';
        $language->shortcode = 'us';
        $language->name = 'English USA';
        $language->flag = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/US_flag_49_stars.svg/800px-US_flag_49_stars.svg.png';
        $language->save();
    }
}
