<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'avatar' => $this->faker->imageUrl(200, 200, 'people', true, 'Profile'),
            'job_title' => $this->faker->jobTitle(),
            'summary' => $this->faker->paragraph(3),
        ];
    }
}
