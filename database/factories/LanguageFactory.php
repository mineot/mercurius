<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Language>
 */
class LanguageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $languages = [
            ['name' => 'English - United States', 'code' => 'en', 'country' => 'US'],
            ['name' => 'Português - Brasil', 'code' => 'pt', 'country' => 'BR'],
            ['name' => 'Español - España', 'code' => 'es', 'country' => 'ES'],
            ['name' => 'Français - France', 'code' => 'fr', 'country' => 'FR'],
            ['name' => 'Deutsch - Deutschland', 'code' => 'de', 'country' => 'DE'],
        ];

        $language = $this->faker->randomElement($languages);

        return [
            'name' => $language['name'],
            'code' => $language['code'],
            'country' => $language['country'],
        ];
    }
}
