<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PublicProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('signed', [AuthController::class, 'signed']);

Route::prefix('public')->group(function () {

    Route::get('/profile/{shortcode}', [PublicProfileController::class, 'getProfile']);

    // Route::get('/user', function (Request $request) {
    //     return $request->user();
    // })->middleware('auth:sanctum');

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
