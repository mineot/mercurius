@extends("core/main")

@section("content")
<x-layout-center>
    <form action="#" class="form">
        <h1 class="title">Login</h1>

        <div class="control">
            <label for="email">Email</label>
            <input type="email" name="email" id="email">
            <div class="msg">Message</div>
        </div>

        <button class="action">Login</button>
    </form>
</x-layout-center>
@endsection
