@extends("layouts/guest")

@section("content")
<div class="auth-index">
    <h1 class="title text-center">Login</h1>

    <form action="">
        <div class="formGroup">
            <label for="email">E-mail</label>
            <input type="email" id="email" />
        </div>

        <div class="formGroup">
            <label for="password">Password</label>
            <input type="password" id="password" />
        </div>

        <button class="mt-4" type="button">Login</button>
    </form>
</div>
@endsection
