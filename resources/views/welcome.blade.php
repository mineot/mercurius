@extends("main")

@section("content")
<section class="app-layout">
    <x-navbar toogleClick="window.sidebar()" />
    <x-sidebar />
    <main class="content app-helper-space-content">Welcome</main>
    <x-footer />
    <x-glass click="window.sidebar()" />
</section>
{{-- <x-header :profile="$profile" toogleClick="window.sidebar()" />
<div class="app-space-x">Profissional</div>
<div class="app-space-x">Especialidades</div>
<div class="app-space-x">Portifólio</div>
<footer class="footer app-space">Footer</footer>
<x-sidebar :profile="$profile" />
<x-backdrop-glass click="window.sidebar()" /> --}}
@endsection
