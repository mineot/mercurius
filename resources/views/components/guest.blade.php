<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        @vite(['resources/sass/app.scss', 'resources/scripts/app.ts'])
    </head>
    <body>
        <section id="app">
            <header>Header</header>
            <nav>Nav</nav>
            <main>
                <i class="bi bi-house"></i>
                Main
            </main>
            <footer>Footer</footer>
        </section>
    </body>
</html>
