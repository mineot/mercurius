@extends("layouts/guest")

@section("content")
<div class="auth-index">
    <h1>Login</h1>

    <form action="">
        <div class="item">
            <label for="email">E-mail</label>
            <input type="email" id="email" />
        </div>

        <div class="item">
            <label for="password">Password</label>
            <input type="password" id="password" />
        </div>

        <button type="button">Login</button>
    </form>
</div>
@endsection
