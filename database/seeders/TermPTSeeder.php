<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\Term;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TermPTSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $language = Language::where('code', 'pt-BR')->first();

        $term = new Term();
        $term->code = 'about_me';
        $term->value = 'Sobre Mim';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'portfolio';
        $term->value = 'Portifólio';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'services_pricing';
        $term->value = 'Serviços e Preços';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'resume';
        $term->value = 'Curriculo';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'blog';
        $term->value = 'Blog';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'contact';
        $term->value = 'Contato';
        $term->language = $language->id;
        $term->save();
    }
}
