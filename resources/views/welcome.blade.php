<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        @vite(['resources/core/app.css', 'resources/core/app.ts'])
    </head>
    <body data-bs-theme="dark">
        <h1>Bem-vindo ao Mercurius</h1>
        <p>Este é o seu novo construtor de websites!</p>
    </body>
</html>
