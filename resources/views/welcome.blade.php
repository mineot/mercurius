@extends("main")

@section("content")
<section class="app-guest-layout">
    <header>Header</header>
    <main class="content">Welcome</main>
    <footer>Footer</footer>
</section>
{{-- <x-header :profile="$profile" toogleClick="window.sidebar()" />
<div class="app-space-x">Profissional</div>
<div class="app-space-x">Especialidades</div>
<div class="app-space-x">Portifólio</div>
<footer class="footer app-space">Footer</footer>
<x-sidebar :profile="$profile" />
<x-backdrop-glass click="window.sidebar()" /> --}}
@endsection
