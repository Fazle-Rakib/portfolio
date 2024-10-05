<template>
  <div class="hero">
      <div class="container flex flex-col">
        <h1 class="hero__headline">Articles</h1>
        <p class="hero__description">
          Explore my articles on academic learning, 🔬 research projects, 💻 development progress, and 💡 random thoughts. Enjoy the journey!
        </p>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.hero {
  background-color: var(--accent-color-lighter, var(--color-gray-800));
  box-shadow: var(--elevation-2);
}

.container {
  padding: calc(2rem + 1vw) 0;
}

.hero__headline {
  font-size: var(--text-2xl);
}

.hero__description {
  font-size: var(--text-lg);
  max-width: 800px;
}


body[data-theme='light'] .hero {
  box-shadow: var(--elevation-3);
}

@media screen and (max-width: 768px) {
  .hero .container {
    padding: 1rem 2.4rem;
  }
}

</style>
