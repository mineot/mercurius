<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\Term;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TermENSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $language = Language::where('code', 'en-US')->first();

        $term = new Term();
        $term->code = 'about_me';
        $term->value = 'About Me';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'portfolio';
        $term->value = 'Portfolio';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'services_pricing';
        $term->value = 'Services & Pricing';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'resume';
        $term->value = 'Resume';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'blog';
        $term->value = 'Blog';
        $term->language = $language->id;
        $term->save();

        $term = new Term();
        $term->code = 'contact';
        $term->value = 'Contact';
        $term->language = $language->id;
        $term->save();
    }
}
