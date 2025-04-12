@extends("core/main")

@section("content")
<div class="layout-center">
    <div class="content border size-sm">

        <form class="form-layout">
            <h1 class="form-title">Login</h1>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" />
                <div>Message</div>
            </div>
            <div class="form-group">
                <label for="email">Password</label>
                <input id="password" type="password" />
                <div>Message</div>
            </div>
            <button type="button" class="form-action">Button</button>
        </form>

    </div>
</div>

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
