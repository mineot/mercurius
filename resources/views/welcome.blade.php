@extends("main")

@section("content")
<section class="app-guest-layout">
    <header class="header app-navbar">
        <section class="content">Header</section>
    </header>

    <main class="content app-helper-space-content">Welcome</main>

    <footer class="footer app-helper-space-content">
        <section class="content">Footer</section>
    </footer>
</section>
{{-- <x-header :profile="$profile" toogleClick="window.sidebar()" />
<div class="app-space-x">Profissional</div>
<div class="app-space-x">Especialidades</div>
<div class="app-space-x">Portifólio</div>
<footer class="footer app-space">Footer</footer>
<x-sidebar :profile="$profile" />
<x-backdrop-glass click="window.sidebar()" /> --}}
@endsection
