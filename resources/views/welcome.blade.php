@extends("main")

@section("content")
<section class="app-guest-layout">
    <header class="header app-navbar">
        <section class="content app-navbar-content">
            <div>Brand</div>
            <nav class="app-navbar-nav">
                <ul class="app-navbar-list">
                    <li class="app-navbar-item">Item 1</li>
                    <li class="app-navbar-item">Item 2</li>
                    <li class="app-navbar-item">Item 3</li>
                </ul>
            </nav>
            <div class="app-navbar-toogle" onclick="alert('toogle')">
                <i class="bi bi-list"></i>
            </div>
        </section>
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
