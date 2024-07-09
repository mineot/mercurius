<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Throwable;

// TODO code validation
// TODO remmeber me
class AuthController extends MessageController
{
    function signed() {
        try {
            if (Auth::check()) return $this->success('auth/signed', 'authorized');
            return $this->unauthorized('auth/signed');
        } catch (Throwable $th) {
            return $this->fail('auth/signed', $th);
        }
    }

    function signin(Request $request) {
        try {
            $credentials = $request->validate([
                'email' => ['required', 'email'],
                'password' => ['required'],
            ]);

            if (Auth::attempt($credentials)) {
                $request->session()->regenerate();
                return $this->success('auth/signin', 'authorized');
            }

            return $this->unauthorized('auth/signin');
        } catch (Throwable $th) {
            return $this->fail('auth/signin', $th);
        }
    }

    function signup(Request $request) {
        try {
            $create = $request->validate([
                'email' => ['required', 'email'],
                'name' => ['required'],
                'password' => ['required', 'confirmed'],
            ]);

            $credentials = $request->only('email', 'password');

            $user = new User();
            $user->name = $create['name'];
            $user->email = $create['email'];
            $user->password = bcrypt($create['password']);
            $user->save();

            Auth::attempt($credentials);
            $request->session()->regenerate();
            return $this->created('auth/signup');
        } catch(ValidationException $ex) {
            return $this->validationException('auth/signup', $ex);
        } catch(QueryException $ex) {
            return $this->queryException('auth/signup', $ex);
        } catch (Throwable $th) {
            return $this->fail('auth/signup', $th);
        }
    }

    function signout(Request $request) {
        try {
            Auth::logout();
            $request->session()->regenerate();
            return $this->success('auth/signout');
        } catch (Throwable $th) {
            return $this->fail('auth/signout', $th);
        }
    }

    function recovery() {
        return $this->success('auth/recovery');
    }

    function validate() {
        return $this->success('auth/validate');
    }

    function change() {
        return $this->success('auth/change');
    }
}
