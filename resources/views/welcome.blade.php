@extends("main")

@section("content")
<x-layout>
    <x-navbar toogleClick="window.sidebar()">
        <x-slot name="brand">
            <x-profile :profile="$profile" />
        </x-slot>
    </x-navbar>

    <x-sidebar>
        <x-slot:brand>
            <x-profile :profile="$profile" :isSidebar="true" />
        </x-slot:brand>
        <div>sidebar content</div>
    </x-sidebar>

    <x-main />

    <x-footer />

    <x-glass click="window.sidebar()" />
</x-layout>
@endsection
