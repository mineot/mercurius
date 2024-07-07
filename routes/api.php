<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PublicProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('public')->group(function () {
    Route::prefix('profile')->group(function () {
        Route::get('{shortcode}', [PublicProfileController::class, 'getProfile']);
    });
    // Route::get('/user', function (Request $request) {
    //     return $request->user();
    // })->middleware('auth:sanctum');
});

Route::prefix('auth')->controller(AuthController::class)->group(function () {
    Route::get('signed', 'signed');
    Route::post('sign/in', 'signin');
    Route::post('sign/up', 'signup');
    Route::post('sign/out', 'signout');
    Route::post('pswd/recovery', 'recovery');
    Route::post('pswd/validate', 'validate');
    Route::post('pswd/change', 'change');
});

// Route::prefix('admin')->group(function () {
//     Route::get('/test', function() {
//         return 'Admin Test';
//     });
// });
