@extends("layouts/main")

@section("content")
<x-layout>
    <x-slot:brand>
        <x-profile-header :profile="$profile" />
    </x-slot:brand>

    <x-slot:sidebarHead>
        <x-profile-sidebar :profile="$profile" />
    </x-slot:sidebarHead>

    <x-slot:nav>
        <a href="#" class="nav-link">
            <i class="bi bi-house-fill icon"></i>
            <span class="label">Home</span>
        </a>
        <a href="#" class="nav-link">
            <i class="bi bi-person-fill icon"></i>
            <span class="label">About Me</span>
        </a>
        <a href="#" class="nav-link">
            <i class="bi bi-book icon"></i>
            <span class="label">Articles</span>
        </a>
    </x-slot:nav>

    <x-slot:sidebarSocialMedia>
        Social Medias
    </x-slot:sidebarSocialMedia>

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
