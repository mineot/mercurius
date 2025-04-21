@extends("core/main")

@section("content")
<x-layout
    :profile="$profile"
    :headerNavLinks="$headerNavLinks"
    :sidebarNavLinks="$sidebarNavLinks"
    :socialMedia="$socialMedia">
    <h1>Welcome</h1>
</x-layout>
@endsection
