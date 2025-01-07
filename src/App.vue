<template>
  <nav>
    <div>
      <RouterLink to="/">
        <app-icon type="home" />
        <span>Home</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/resume">
        <app-icon type="resume" />
        <span>Resume</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/portfolio">
        <app-icon type="portfolio" />
        <span>Portfolio</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/products">
        <app-icon type="product" />
        <span>Products</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/services">
        <app-icon type="service" />
        <span>Services</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/articles">
        <app-icon type="article" />
        <span>Articles</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/blog">
        <app-icon type="blog" />
        <span>Blog</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/contact">
        <app-icon type="contact" />
        <span>Contact</span>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/about">
        <app-icon type="about" />
        <span>About</span>
      </RouterLink>
    </div>
  </nav>

  <RouterView />
</template>
