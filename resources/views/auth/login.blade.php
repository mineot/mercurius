@extends("core/main")

@section("content")
<x-layout-center :title="__('terms.login')">
    <form action="/signin" method="POST" onsubmit="window.disableSubmit(this)" class="flex flex-col gap-4">
        @csrf
        <x-form-control id="email" name="email" type="email" :label="__('terms.email')" value="{{ old('email') }}" />
        <x-form-control id="password" name="password" type="password" :label="__('terms.password')" />
        @error("login-failed")
        <div class="tertiary-message">{{ __($message) }}</div>
        @enderror
        <button type="submit" class="btn">{{ __('terms.login') }}</button>
    </form>
</x-layout-center>
@endsection
