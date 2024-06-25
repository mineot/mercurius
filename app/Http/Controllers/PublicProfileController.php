<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class PublicProfileController extends Controller
{
    function getProfile($shortcode) {
        $language = Language::where('shortcode', $shortcode)->first();
        return $language->profiles()->first();
    }
}
