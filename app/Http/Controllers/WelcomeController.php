<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Welcome', [
            // 'profile' => Language::getCurrentLanguage()->profiles()->first(),
        ]);
    }
}
