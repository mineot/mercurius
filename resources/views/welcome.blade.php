@extends("core/main")

@section("content")
<x-layout>
    <x-slot:headerBrand>
        <x-profile :profile="$profile" style="header-brand" />
    </x-slot:headerBrand>

    <x-slot:headerNav>
        <x-nav-link href="#" icon="bi bi-house-fill" label="Home" />
        <x-nav-link href="#" icon="bi bi-person-fill" label="About" />
        <x-nav-link href="#" icon="bi bi-book" label="Articles" />
    </x-slot:headerNav>

    <x-slot:sidebarHead>
        <x-profile :profile="$profile" style="sidebar-head" />
    </x-slot:sidebarHead>

    <x-slot:sidebarSocials>
        <x-nav-link href="#" icon="bi bi-github" title="GitHub" />
        <x-nav-link href="#" icon="bi bi-whatsapp" title="WhatsApp" />
        <x-nav-link href="#" icon="bi bi-youtube" title="YouTube" />
        <x-nav-link href="#" icon="bi bi-envelope-fill" title="Email" />
    </x-slot:sidebarSocials>

    <x-slot:sidebarNav>
        <x-nav-link href="#" icon="bi bi-house-fill" label="Home" />
        <x-nav-link href="#" icon="bi bi-person-fill" label="About" />
        <x-nav-link href="#" icon="bi bi-book" label="Articles" />
    </x-slot:sidebarNav>

    <x-slot:sidebarContent>
        Others Contents
    </x-slot:sidebarContent>

    <x-slot:footer>Footer</x-slot:footer>

    <h1>Welcome</h1>
</x-layout>
@endsection
