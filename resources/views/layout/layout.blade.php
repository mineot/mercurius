<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        @vite(['resources/scss/app.scss'])
        <title>Mercurius</title>
    </head>
    <body>
        @yield('body')
        @vite(['resources/js/app.js'])
    </body>
</html>
