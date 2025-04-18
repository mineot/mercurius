@extends("core/main")

@section("content")
<x-layout-center :title="__('terms.login')">
    <form class="flex flex-col gap-2">
        <x-form-control id="email" name="email" type="email" :label="__('terms.email')" />
        <x-form-control id="password" name="password" type="password" :label="__('terms.password')" />
        <button class="btn">{{ __('terms.login') }}</button>
    </form>
</x-layout-center>
@endsection
