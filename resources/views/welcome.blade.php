@extends("main")

@section("content")
<x-layout>
    <x-slot:brand>
        <x-profile-header :profile="$profile" />
    </x-slot:brand>

    <x-slot:nav>Navigation</x-slot:nav>
    <x-slot:sidebarBrand>Sidebar Brand</x-slot:sidebarBrand>
    <x-slot:sidebarContent>Sidebar Content</x-slot:sidebarContent>
    <x-slot:footer>Footer</x-slot:footer>
    <h1>Welcome</h1>
</x-layout>
@endsection
