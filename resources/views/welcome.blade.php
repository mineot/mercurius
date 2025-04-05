@extends("layouts/guest")

@section("content")
<x-header :profile="$profile" />
<div class="app-space-x">Profissional</div>
<div class="app-space-x">Especialidades</div>
<div class="app-space-x">Portifólio</div>
<footer class="footer app-space">Footer</footer>
<x-sidebar :profile="$profile" />
<div class="backdrop-glass" onclick="window.sidebar()"></div>
@endsection
