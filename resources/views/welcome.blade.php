<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @vite(['resources/scss/app.scss'])
    <title>{{ env('APP_NAME') }}</title>
</head>

<body>
    <div id="app">
        <router-view />
    </div>
    @vite(['resources/scripts/app.ts'])
</body>

</html>
