@extends("layouts/guest")

@section("content")
<x-header :profile="$profile" />

<div class="space-x margin-x" >Profissional</div>
<div class="space-x margin-x">Especialidades</div>
<div class="space-x margin-x">Portifólio</div>

<footer class="footer space margin-x">Footer</footer>

<aside class="sidebar">
    <div class="sidebar-brand">
        <img src="{{ $profile->avatar }}" alt="{{ $profile->name }}">
        <span>{{ $profile->name }}</span>
        <span>{{ $profile->summary }}</span>
    </div>
    <hr>
    <nav class="sidebar-menu">
        <ul class="sidebar-links">
            <li>
                <a class="navbar-link" href="#">
                    <i class="bit bi-link"></i>
                    <span>Link</span>
                </a>
            </li>
        </ul>
    </nav>
</aside>

<div class="backdrop-glass" onclick="window.sidebar()"></div>
@endsection
