<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\WelcomeController;
use App\Http\Middleware\AuthMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', [WelcomeController::class, 'index'])->name('welcome');
Route::get('/contact', [ContactController::class, 'index'])->name('contact');

Route::get('/auth/login', [AuthController::class, 'login'])->name('auth.login');
Route::post('/auth/signin', [AuthController::class, 'signIn'])->name('auth.signin');
Route::post('/auth/signout', [AuthController::class, 'signOut'])->name('auth.signout');

Route::middleware([AuthMiddleware::class])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
});
