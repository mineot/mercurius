<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('public')->group(function () {

    Route::get('/test', function() {
        return 'Public Test';
    });

    Route::get('/user', function (Request $request) {
        return $request->user();
    })->middleware('auth:sanctum');

});

Route::prefix('auth')->group(function () {
    Route::get('/test', function() {
        return 'Auth Test';
    });
});

Route::prefix('admin')->group(function () {
    Route::get('/test', function() {
        return 'Admin Test';
    });
});
