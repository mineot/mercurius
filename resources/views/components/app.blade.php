<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name') }}</title>
        @vite(['resources/sass/app.scss', 'resources/scripts/app.ts'])
    </head>
    <body data-bs-theme="dark">
        <div id="app" class="container">
            @isset($header)
                <header>
                    {{ $header }}
                </header>
            @endisset

            @isset($nav)
                <nav>
                    {{ $nav }}
                </nav>
            @endisset

            <main>{{ $slot }}</main>

            @isset($footer)
                <footer>
                    {{ $footer }}
                </footer>
            @endisset
        </div>
    </body>
</html>
