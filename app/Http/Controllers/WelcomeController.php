<?php

namespace App\Http\Controllers;

use App\Models\Language;

class WelcomeController extends Controller
{
    public function index()
    {
        $lang = Language::getCurrentLanguage();

        return view('welcome', [
            'profile' => $lang->profiles()->first(),
            'language' => $lang,
        ]);
    }
}
