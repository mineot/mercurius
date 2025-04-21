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
                @isset($headerNav)
                <div class="links">
                    {{ $headerNav }}
                </div>
                @endisset

                <i class="bi bi-list toogle-menu" onclick="window.sidebar()"></i>
            </nav>
        </section>
    </header>

    <main class="main-content">
        {{ $slot }}
    </main>

    @isset($footer)
    <footer>
        <section class="content">
            <div class="copyright">
                &copy;
                {{ __("terms.all_rights_reserved", ["owner" => env("VITE_APP_OWNER"), "year" => env("VITE_APP_YEAR")]) }}
            </div>
            {{ $footer }}
            <a href="/contact" class="link-sm">
                <i class="bi bi-envelope-fill"></i>
                <span>{{ __("terms.contact_me") }}</span>
            </a>
        </section>
    </footer>
    @endisset

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
            @isset($sidebarSocials)
            <div class="social-media">
                {{ $sidebarSocials }}
            </div>
            @endisset

            @isset($sidebarNav)
            <nav>
                {{ $sidebarNav }}
            </nav>
            @endisset

            {{ $sidebarContent }}
        </section>
    </aside>

    <div class="glass" onclick="window.sidebar()"></div>
</section>
