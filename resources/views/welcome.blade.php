@extends("main")

@section("content")
<x-layout>
    <x-slot:brand>
        <x-profile-header :profile="$profile" />
    </x-slot:brand>

    <x-slot:sidebarBrand>
        <x-profile-sidebar :profile="$profile" />
    </x-slot:sidebarBrand>

    <x-slot:nav>
        <a href="#" class="nav-link">
            <i class="bi bi-house-fill"></i>
            <span>Home</span>
        </a>
        <a href="#" class="nav-link">
            <i class="bi bi-person-fill"></i>
            <span>Sobre Mim</span>
        </a>
        <a href="#" class="nav-link">
            <i class="bi bi-book"></i>
            <span>Artigos</span>
        </a>
    </x-slot:nav>

    <x-slot:sidebarContent></x-slot:sidebarContent>

    <x-slot:footer>Footer</x-slot:footer>

    <h1>Welcome</h1>
</x-layout>
@endsection
