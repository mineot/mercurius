<section class="layout">
    <header >
        <section class="content">
            <div>{{ $brand }}</div>
            <nav>
                @isset($nav)
                <div class="links">
                    {{ $nav }}
                </div>
                @endisset
                <i class="bi bi-list toogle-menu" onclick="window.sidebar()"></i>
            </nav>
        </section>
    </header>

    <main class="content">
        {{ $slot }}
    </main>

    @isset($footer)
    <footer>
        <section class="content">
            {{ $footer }}
        </section>
    </footer>
    @endisset

    <aside>
        <section class="head">
            <div class="brand">{{ $sidebarHead }}</div>
            <i class="bi bi-x-lg close-sidebar" onclick="window.sidebar()"></i>
        </section>
        <section class="content">
            @isset($sidebarSocialMedia)
            <div class="social-media">
                {{ $sidebarSocialMedia }}
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
