@extends("main")

@section("content")
<x-layout>
    <x-slot:brand>
        <x-profile-header :profile="$profile" />
    </x-slot:brand>

    <x-slot:sidebarBrand>
        <x-profile-sidebar :profile="$profile" />
    </x-slot:sidebarBrand>

    <x-slot:nav></x-slot:nav>
    <x-slot:sidebarContent></x-slot:sidebarContent>
    <x-slot:footer></x-slot:footer>

    <h1>Welcome</h1>
</x-layout>
@endsection
