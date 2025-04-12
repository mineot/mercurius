@extends("layouts/main")

@section("content")
<x-layout>
    <x-slot:headerBrand>
        <x-layout-profile :profile="$profile" style="header-brand" />
    </x-slot:headerBrand>

    <x-slot:headerNav>
        <a href="#" class="nav-link" title="Home">
            <i class="bi bi-house-fill icon"></i>
            <span class="label">Home</span>
        </a>
        <a href="#" class="nav-link" title="About Me">
            <i class="bi bi-person-fill icon"></i>
            <span class="label">About Me</span>
        </a>
        <a href="#" class="nav-link" title="Articles">
            <i class="bi bi-book icon"></i>
            <span class="label">Articles</span>
        </a>
    </x-slot:headerNav>

    <x-slot:sidebarHead>
        <x-layout-profile :profile="$profile" style="sidebar-head" />
    </x-slot:sidebarHead>

    <x-slot:sidebarSocials>
        Social Medias
    </x-slot:sidebarSocials>

    <x-slot:sidebarNav>
        Navigation
    </x-slot:sidebarNav>

    <x-slot:sidebarContent>
        Content
    </x-slot:sidebarContent>

    <x-slot:footer>Footer</x-slot:footer>

    <h1>Welcome</h1>
</x-layout>
@endsection
