@extends("main")

@section("content")
<x-layout>
    <x-slot:brand>Brand</x-slot:brand>
    <x-slot:nav>Navigation</x-slot:nav>
    <x-slot:footer>Footer</x-slot:footer>
    <h1>Welcome</h1>
</x-layout>
@endsection
