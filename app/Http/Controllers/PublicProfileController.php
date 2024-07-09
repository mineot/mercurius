<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;
use Throwable;

class PublicProfileController extends MessageController {
    function getProfile($shortcode) {
        try {
            $language = Language::where('shortcode', $shortcode)->first();
            return $this->returnData('public/profile', $language->profiles()->first());
        } catch (Throwable $th) {
            return $this->fail('profile', $th);
        }
    }
}
