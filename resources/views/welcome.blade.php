@extends("layouts/guest")

@section("content")
<section class="welcome">
    <div class="left">
        <img src="{{ $profile->avatar }}" alt="{{ $profile->name }}" >

        <h1 class="title">{{ $profile->name }}</h1>

        <h2 class="subtitle">{{ $profile->summary }}</h2>

        <div class="social">
            <a href="#" class="large">
                <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="#" class="large">
                <i class="fa-brands fa-youtube"></i>
            </a>

            <a href="#" class="large">
                <i class="fa-brands fa-whatsapp"></i>
            </a>

            <a href="#" class="large">
                <i class="fa-solid fa-envelope"></i>
            </a>
        </div>
    </div>

    <hr class="sm:hidden">

    <div class="right">
        <a href="#">
            <span>Sobre Mim</span>
        </a>

        <a href="#">
            <span>Portifolio</span>
        </a>

        <a href="#">
            <span>Serviços</span>
        </a>

        <a href="#">
            <span>Produtos</span>
        </a>

        <a href="#">
            <span>Artigos</span>
        </a>

        <a href="#">
            <span>Blog</span>
        </a>

        <a href="#">
            <span>Contato</span>
        </a>
    </div>
</section>
@endsection
