@extends("core/main")

@section("content")
<x-layout-public
    :profile="$profile"
    :headerNavLinks="$headerNavLinks"
    :sidebarNavLinks="$sidebarNavLinks"
    :socialMedia="$socialMedia">
    <h1>Welcome</h1>
</x-layout-public>
@endsection
