<aside class="sidebar">

    <div class="sidebar-brand">

        <img class="sidebar-avatar" src="{{ $profile->avatar }}" alt="{{ $profile->name }}">

        <div class="sidebar-profile">
            <span class="sidebar-name">{{ $profile->name }}</span>
            <span class="sidebar-summary">{{ $profile->summary }}</span>
        </div>

    </div>

    <hr class="sidebar-divider">

    <nav class="sidebar-menu">

        <ul class="sidebar-links">
            <li>
                <a class="sidebar-link" href="#">
                    <i class="bit bi-link"></i>
                    <span>Link</span>
                </a>
            </li>
        </ul>

    </nav>

</aside>
