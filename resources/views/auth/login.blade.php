@extends("core/main")

@section("content")
<form class="layout-form-center">
    <h1>Login</h1>
    <div class="groups">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" />
        </div>
        <div class="form-group">
            <label for="email">Password</label>
            <input id="password" type="password" />
        </div>
    </div>
    <button>Button</button>
</form>
{{-- <div class="auth-index">
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
</div> --}}
@endsection
