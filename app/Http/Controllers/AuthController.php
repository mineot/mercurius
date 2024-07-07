<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function signed() {
        return [
            'isAuthenticated' => Auth::check()
        ];
    }

    function signin() {
        dd('sign in');
    }

    function signup() {
        dd('sign up');
    }

    function signout() {
        Auth::logout();
    }

    function recovery() {
        dd('recovery password');
    }

    function validate() {
        dd('validate code');
    }

    function change() {
        dd('change password');
    }
}
