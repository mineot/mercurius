<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class PublicProfileController extends Controller
{
    function getProfile($lang) {
        $language = Language::where('code', $lang)->first();
        return $language->profiles()->first();
    }
}
