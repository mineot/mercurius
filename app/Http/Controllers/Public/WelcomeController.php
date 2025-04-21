<?php

namespace App\Http\Controllers\Public;

use App\Http\Controllers\ControllerPublic;

class WelcomeController extends ControllerPublic
{
    public function index()
    {
        return view('public.welcome', $this->getPublicData());
    }
}
