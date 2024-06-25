<?php

namespace Database\Seeders;

use App\Models\Language;
use App\Models\Profile;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProfileENSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $language = Language::where('code', 'en-US')->first();

        $profile = new Profile();
        $profile->name = 'John Doe';
        $profile->job_title = 'Assistant for General Affairs';
        $profile->summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.';
        $profile->description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.';
        $profile->photo = 'https://i.pravatar.cc/180';
        $profile->image_card = 'https://i.pravatar.cc/500';
        $profile->language = $language->id;
        $profile->save();
    }
}
