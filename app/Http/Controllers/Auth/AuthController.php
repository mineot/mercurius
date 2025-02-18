<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function signIn()
    {
        return Inertia::render('SignIn');
    }
}
