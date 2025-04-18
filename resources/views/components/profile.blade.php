<div class="profile {{ $style }}">
    <img src="{{ $profile->avatar }}" alt="{{ $profile->name }}">
    <div class="content">
        <h1>{{ $profile->name }}</h1>
        <h2>{{ $profile->summary }}</h2>
    </div>
</div>
