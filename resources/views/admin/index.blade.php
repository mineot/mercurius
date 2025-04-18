@extends("core/main")

@section("content")
<h1>Admin</h1>
<form action="/signout" method="POST">
    @csrf
    <button type="submit" class="btn">Logout</button>
</form>
@endsection
