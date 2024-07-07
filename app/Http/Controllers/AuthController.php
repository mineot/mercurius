<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Throwable;

class AuthController extends Controller
{
    function signed() {
        if (Auth::check()) {
            return response()->json([], 200);
        }

        return response()->json([], 401);
    }

    function signin(Request $request) {
        try {
            $credentials = $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
                return response()->json(['message' => 'authorized'], 200);
            }

            return response()->json(['error' => 'unauthorized'], 401);
        } catch (Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
    }

    function signup() {
        dd('sign up');
    }

    function signout(Request $request) {
        try {
            Auth::logout();
            $request->session()->regenerate();
        } catch (Throwable $th) {
            return response()->json(['error' => $th->getMessage()], 500);
        }
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
