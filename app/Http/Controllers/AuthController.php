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
            if (Auth::check()) return $this->success('signed', 'authorized');
            return $this->unauthorized('signed');
        } catch (Throwable $th) {
            return $this->fail('signed', $th);
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
                return $this->success('signin', 'authorized');
            }

            return $this->unauthorized('signin');
        } catch (Throwable $th) {
            return $this->fail('signin', $th);
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
            return $this->created('signup');
        } catch(ValidationException $ex) {
            return $this->validationException('signup', $ex);
        } catch(QueryException $ex) {
            return $this->queryException('signup', $ex);
        } catch (Throwable $th) {
            return $this->fail('signup', $th);
        }
    }

    function signout(Request $request) {
        try {
            Auth::logout();
            $request->session()->regenerate();
        } catch (Throwable $th) {
            return $this->fail('signout', $th);
        }
    }

    function recovery() {
        return $this->success('recovery');
    }

    function validate() {
        return $this->success('validate');
    }

    function change() {
        return $this->success('change');
    }
}
