<template>
  <section class="hero container has-ellipse-curve">
    <div class="hero-content">
      <h1 class="hero__headline">I'm Fazle Rabbi Rakib</h1>
      <p class="hero__description">
        A <strong>Lecturer</strong> and <strong>Software Engineer</strong>.
        My work spans
        <a href="https://www.sust.edu/institutes/iict/faculty/rakib-iict@sust.edu" class="hero-link" target="_blank"
          rel="noopener noreferrer">teaching</a>,
        <a href="https://scholar.google.com/citations?user=3C2-4CkAAAAJ&hl=en" class="hero-link" target="_blank"
          rel="noopener noreferrer">
          research</a>, and
        <a href="https://github.com/Fazle-Rakib" class="hero-link" target="_blank" rel="noopener noreferrer">software
          engineering</a>
        , with a practical focus: turning real-world problems into simple, usable solutions that improve people’s lives.
        Teaching and learning keep me energized, and I’m always up for the next challenge🌟
      </p>
      <SocialMediaIcons />
    </div>
    <div class="hero-aside">
      <ScrollIndicator class="is-mobile-only" />
      <h2 class="hero__subheadline">web developer</h2>
      <HeroAvatar>
        <img src="@/assets/img/profile.jpg" alt="me" class="hero-avatar__image mx-auto w-1/2 object-cover"
          loading="lazy" />
      </HeroAvatar>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(50%, 700px) auto;
  align-items: center;
  padding: 3rem 0;
}

.hero__headline {
  font-size: var(--text-3xl);
  font-size: clamp(var(--text-xl), 1vw + var(--text-2xl), var(--text-3xl));
  font-weight: 700;
}

.hero__subheadline {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1em;
  font-size: var(--text-sm);
  font-family: var(--font-mono);
  font-weight: 500;
  writing-mode: vertical-lr;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  color: var(--color-gray-400);
  margin: 0 1rem;
}

.hero__subheadline::before,
.hero__subheadline::after {
  content: '';
  border-bottom: 1px solid var(--color-gray-400);
  align-self: center;
  justify-self: center;
  min-width: 24px;
  transform: rotate(90deg);
}

.hero__description {
  font-size: clamp(var(--text-base), 1vw + var(--text-lg), var(--text-xl));
  margin-bottom: 1.5rem;
  color: var(--color-silver-600);
}

.hero-link {
  color: var(--color-primary, #007bff);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.hero-link:hover {
  color: var(--color-accent, #ff6b6b);
  transform: scale(1.05);
}

.hero-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-accent, #ff6b6b);
  transition: width 0.3s ease;
}

.hero-link:hover::after {
  width: 100%;
}

.hero-aside {
  display: flex;
  justify-self: end;
  padding: 0 17px;
}

@media screen and (min-width: 1024px) {
  .hero::after {
    content: '';
    background-color: var(--color-gray-600);
    opacity: 0.1;
    position: absolute;
    width: 100%;
    z-index: -1;
    left: 0;
    top: 0;
  }

  body[data-theme='light'] .hero::after {
    background-color: var(--color-gray-300);
  }

  .hero.has-ellipse-curve::after {
    clip-path: ellipse(100% 55% at 48% 44%);
    height: calc(500px + 2vw);
  }

  .hero.has-triangle-down::after {
    clip-path: polygon(50% 63%, 100% 38%, 100% 2%, 0% 1%, 0% 38%);
    height: calc(500px + 3vw);
  }
}

@media screen and (max-width: 425px) {
  .hero {
    height: 100vh;
    grid-template-columns: 1fr;
  }

  .hero-aside .hero-avatar {
    display: none;
  }

  .hero-content {
    text-align: center;
  }

  .hero__headline {
    font-size: calc(var(--text-xl) + 0.75rem);
    letter-spacing: 1.2px;
  }

  .social-media-icons a {
    padding: 8px;
  }

  .social-media-icons a svg {
    max-width: 35px;
  }
}

@media screen and (max-width: 1024px) {
  .hero {
    padding-right: 18px;
    padding-left: 18px;
  }
}
</style>
