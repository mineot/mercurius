<section class="layout">
    <header>
        <section class="content">
            <div class="profile header-brand">
                <img src="{{ $profile->avatar }}" alt="{{ $profile->name }}">
                <div class="content">
                    <h1>{{ $profile->name }}</h1>
                    <h2>{{ $profile->summary }}</h2>
                </div>
            </div>

            <nav>
                <div class="links">
                    @foreach ($headerNavLinks as $link)
                    <a :href="$link['href']" class="nav-link" :title="$link['label']">
                        <i class="{{ $link['icon'] }} nav-link-icon"></i>
                        <span class="nav-link-label">{{ $link['label'] }}</span>
                    </a>
                    @endforeach
                </div>
                <i class="bi bi-list toogle-menu" onclick="window.sidebar()"></i>
            </nav>
        </section>
    </header>

    <main class="main-content">
        {{ $slot }}
    </main>

    <footer>
        <section class="content">
            <div class="copyright">
                &copy;
                {{ __("terms.all_rights_reserved", ["owner" => env("VITE_APP_OWNER"), "year" => env("VITE_APP_YEAR")]) }}
            </div>
            <a href="#" class="link-sm">
                <i class="bi bi-envelope-fill"></i>
                <span>{{ __("terms.contact_me") }}</span>
            </a>
        </section>
    </footer>

    <aside>
        <section class="head">
            <div class="brand">
                <div class="profile sidebar-head">
                    <img src="{{ $profile->avatar }}" alt="{{ $profile->name }}">
                    <div class="content">
                        <h1>{{ $profile->name }}</h1>
                        <h2>{{ $profile->summary }}</h2>
                    </div>
                </div>
            </div>

            <i class="bi bi-x-lg close-sidebar" onclick="window.sidebar()"></i>
        </section>

        <section class="content">
            <div class="social-media">
                @foreach ($socialMedia as $link)
                <a :href="$link['href']" class="nav-link" :title="$link['label']">
                    <i class="{{ $link['icon'] }}"></i>
                </a>
                @endforeach
            </div>

            <nav>
                @foreach ($sidebarNavLinks as $link)
                <a :href="$link['href']" class="nav-link" :title="$link['label']">
                    <i class="{{ $link['icon'] }}"></i>
                    <span>{{ $link['label'] }}</span>
                </a>
                @endforeach
            </nav>
        </section>
    </aside>

    <div class="glass" onclick="window.sidebar()"></div>
</section>
