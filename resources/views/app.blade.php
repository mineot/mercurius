<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        @vite(['resources/core/sass/app.scss', 'resources/core/scripts/app.ts'])
    </head>
    <body data-bs-theme="dark">
        @inertia
    </body>
</html>
