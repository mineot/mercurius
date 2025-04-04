@extends("layouts/guest")

@section("content")
<x-header :profile="$profile" />
<div class="space-x margin-x" >Profissional</div>
<div class="space-x margin-x">Especialidades</div>
<div class="space-x margin-x">Portifólio</div>
<footer class="footer space margin-x">Footer</footer>
<x-sidebar :profile="$profile" />
<div class="backdrop-glass" onclick="window.sidebar()"></div>
@endsection
