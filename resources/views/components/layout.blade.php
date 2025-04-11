<section class="layout">
    <header >
        <section class="content">
            <div>{{ $brand }}</div>
            <nav>
                <div class="links">
                    {{ $nav }}
                </div>
                <i class="bi bi-list toogle-menu" onclick="window.sidebar()"></i>
            </nav>
        </section>
    </header>

    <main class="content">
        {{ $slot }}
    </main>

    <footer>
        <section class="content">
            {{ $footer }}
        </section>
    </footer>

    <aside>
        <section class="head">
            <div class="brand">{{ $sidebarHead }}</div>
            <i class="bi bi-x-lg close-sidebar" onclick="window.sidebar()"></i>
        </section>
        <section class="content">
            <div class="social-media">
                {{ $sidebarSocialMedia }}
            </div>
            <nav>
                {{ $sidebarNav }}
            </nav>
            {{ $sidebarContent }}
        </section>
    </aside>

    <div class="glass" onclick="window.sidebar()"></div>
</section>
