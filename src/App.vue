<template>
  <nav>
    <div>
      <RouterLink to="/">Home</RouterLink>
    </div>
    <div>
      <RouterLink to="/resume">Resume</RouterLink>
    </div>
    <div>
      <RouterLink to="/portfolio">Portfolio</RouterLink>
    </div>
    <div>
      <RouterLink to="/products">Products</RouterLink>
    </div>
    <div>
      <RouterLink to="/services">Services</RouterLink>
    </div>
    <div>
      <RouterLink to="/articles">Articles</RouterLink>
    </div>
    <div>
      <RouterLink to="/blog">Blog</RouterLink>
    </div>
    <div>
      <RouterLink to="/about">About</RouterLink>
    </div>
  </nav>

  <RouterView />
</template>
