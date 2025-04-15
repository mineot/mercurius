@extends("core/main")

@section("content")
<div class="layout-center">
    <div class="content border size-sm">

        <form class="form-layout">
            <h1 class="form-title">Login</h1>
            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" type="email" />
                <div class="message">Message</div>
            </div>
            <div class="form-group">
                <label for="email">Password</label>
                <input id="password" type="password" />
                <div class="message">Message</div>
            </div>
            <button type="button" class="form-action">Button</button>
        </form>

    </div>
</div>
@endsection
