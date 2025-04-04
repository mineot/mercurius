<header class="navbar space margin-x">

    <div class="navbar-brand">

        <img class="navbar-avatar" src="{{ $profile->avatar }}" alt="{{ $profile->name }}">

        <div class="navbar-title">
            <span class="navbar-name">{{ $profile->name }}</span>
            <span class="navbar-summary">{{ $profile->summary }}</span>
        </div>

    </div>

    <nav class="navbar-menu">

        <ul class="menu-links">
            <li>
                <a class="navbar-link" href="#">
                    <i class="bit bi-link"></i>
                    <span>Link</span>
                </a>
            </li>
        </ul>

        <div class="menu-toggle" onclick="window.sidebar()">
            <i class="bi bi-list"></i>
        </div>

    </nav>

</header>
