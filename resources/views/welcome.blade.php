@extends("main")

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
            <i class="bi bi-house-fill"></i>
            <span>Home</span>
        </a>
        <a href="#" class="nav-link">
            <i class="bi bi-person-fill"></i>
            <span>About Me</span>
        </a>
        <a href="#" class="nav-link">
            <i class="bi bi-book"></i>
            <span>Articles</span>
        </a>
    </x-slot:nav>

    <x-slot:footer>Footer</x-slot:footer>

    <h1>Welcome</h1>
</x-layout>
@endsection
