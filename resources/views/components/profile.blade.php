<div class="app-profile{{ $sidebar() }}">
    <img
        class="app-profile-avatar{{ $sidebar() }}"
        src="{{ $profile->avatar }}"
        alt="{{ $profile->name }}"
    />

    <div class="app-profile-panel{{ $sidebar() }}">
        <div class="app-profile-name{{ $sidebar() }}">{{ $profile->name }}</div>
        <div class="app-profile-summary{{ $sidebar() }}">{{ $profile->summary }}</div>
    </div>
</div>
