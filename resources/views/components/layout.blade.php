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
                    <a href="#" class="nav-link" title="Home">
                        <i class="bi bi-house-door-fill nav-link-icon"></i>
                        <span class="nav-link-label">Home</span>
                    </a>
                    <a href="#" class="nav-link" title="About Me">
                        <i class="bi bi-person-fill nav-link-icon"></i>
                        <span class="nav-link-label">About Me</span>
                    </a>
                    <a href="#" class="nav-link" title="Articles">
                        <i class="bi bi-book nav-link-icon"></i>
                        <span class="nav-link-label">Articles</span>
                    </a>
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
            <a href="/contact" class="link-sm">
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
                <a href="#" class="nav-link" title="GitHub">
                    <i class="bi bi-github"></i>
                </a>
                <a href="#" class="nav-link" title="WhatsApp">
                    <i class="bi bi-whatsapp"></i>
                </a>
                <a href="#" class="nav-link" title="YouTube">
                    <i class="bi bi-youtube"></i>
                </a>
                <a href="#" class="nav-link" title="Email">
                    <i class="bi bi-envelope-fill"></i>
                </a>
            </div>

            <nav>
                <a href="#" class="nav-link">
                    <i class="bi bi-house-fill"></i>
                    <span>Home</span>
                </a>
                <a href="#" class="nav-link">
                    <i class="bi bi-person-fill"></i>
                    <span>About Me</span>
                </a>
                <a href="#" class="nav-link">
                    <i class="bi bi-book"></i>
                    <span>Articles</span>
                </a>
            </nav>
        </section>
    </aside>

    <div class="glass" onclick="window.sidebar()"></div>
</section>
