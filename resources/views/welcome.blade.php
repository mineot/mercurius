@extends("main")

@section("content")
<x-layout>
    <x-navbar toogleClick="window.sidebar()">
        <x-slot name="brand">Profile</x-slot>
    </x-navbar>
    <x-sidebar />
    <x-main />
    <x-footer />
    <x-glass click="window.sidebar()" />
</x-layout>
@endsection
