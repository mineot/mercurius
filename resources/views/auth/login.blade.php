@extends("core/main")

@section("content")
<x-layout-center title="Login">
    <form class="flex flex-col gap-2">
        <x-form-control id="email" name="email" type="email" label="Email" />
        <x-form-control id="password" name="password" type="password" label="Password" />
        <button class="btn">Login</button>
    </form>
</x-layout-center>
@endsection
