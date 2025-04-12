<section class="layout">
    <header >
        <section class="content">
            <div>{{ $headerBrand }}</div>
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
