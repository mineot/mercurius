<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        $lang = Language::getCurrentLanguage();

        return Inertia::render('Welcome', [
            'profile' => $lang->profiles()->first(),
            'language' => $lang,
        ]);
    }
}
