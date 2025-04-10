<?php

namespace App\Http\Controllers;

use App\Models\Profile;

class WelcomeController extends Controller
{
    public function index()
    {
        return view('welcome', [
            'profile' => Profile::first(),
        ]);
    }
}
