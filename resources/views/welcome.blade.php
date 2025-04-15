@extends("core/main")

@section("content")
<div class="flex flex-col gap-2 m-2">
    <h1>Welcome</h1>
    <div class="p-2 secondary border-full secondary-border flex flex-col gap-2">
        <span>Secondary</span>
        <a href="#" class="link">Link</a>
        <a href="#" class="link-lg">Link Large</a>
        <a href="#" class="link-sm">Link Small</a>
        <div>
            <button class="btn">Button</button>
        </div>
        <div>
            <input type="text" class="input">
        </div>
    </div>
</div>
{{-- <x-layout>
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
        <a href="#" title="GitHub" class="item">
            <i class="bi bi-github"></i>
        </a>
        <a href="#" title="WhatsApp" class="item">
            <i class="bi bi-whatsapp"></i>
        </a>
        <a href="#" title="YouTube" class="item">
            <i class="bi bi-youtube"></i>
        </a>
        <a href="#" title="Email" class="item">
            <i class="bi bi-envelope-fill"></i>
        </a>
    </x-slot:sidebarSocials>

    <x-slot:sidebarNav>
        <a href="#" class="nav-link" title="Home">
            <i class="bi bi-house-fill"></i>
            <span>Home</span>
        </a>
        <a href="#" class="nav-link" title="About Me">
            <i class="bi bi-person-fill"></i>
            <span>About Me</span>
        </a>
        <a href="#" class="nav-link" title="Articles">
            <i class="bi bi-book"></i>
            <span>Articles</span>
        </a>
    </x-slot:sidebarNav>

    <x-slot:sidebarContent></x-slot:sidebarContent>

    <x-slot:footer>Footer</x-slot:footer>

    <h1>Welcome</h1>
</x-layout> --}}
@endsection
