<div class="layout-admin">
    <aside>
        <header>{{ __('terms.admin_zone') }}</header>

        <div class="content">
            <a href="#" class="link">Home</a>
        </div>

        <footer>
            <form action="/signout" method="POST" onsubmit="window.disableSubmit(this)" class="w-full">
                @csrf
                <button type="submit" class="link w-full">
                    <i class="fa-solid fa-power-off"></i>
                    <span>{{ __('terms.logout') }}</span>
                </button>
            </form>
        </footer>
    </aside>

    <main>
        {{ $slot }}
    </main>
</div>
