<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        @vite(['resources/core/app.css', 'resources/core/app.ts'])
    </head>
    <body>
        <h1>Bem-vindo ao Mercurius</h1>
        <p>Este é o seu novo construtor de websites!</p>
        <div>
            <i class="bi bi-house"></i>
        </div>
    </body>
</html>
