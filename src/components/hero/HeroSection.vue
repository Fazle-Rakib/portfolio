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
        Teaching and learning keep me energized.
      </p>
      <p class="hero__description">
        I hold a Bachelor's degree in Software Engineering from Shahjalal University of Science and Technology(SUST).
        Before joining
        academia as Lecturer at IICT, SUST, I spent two years in industry as a Software Engineer at Pathao. I teach core
        courses:
        OOP, Software Requirements, Web Tech, Information and Network Security. I have contributed to large Bengali
        datasets and papers (
        <a href="https://fazle-rakib.github.io/portfolio/articles/ood-speech-benchmark-dataset-bengali-asr"
          class="hero-link" target="_blank" rel="noopener noreferrer">OOD-Speech</a>,
        <a href="https://fazle-rakib.github.io/portfolio/articles/badlad-document-layout-dataset" class="hero-link"
          target="_blank" rel="noopener noreferrer">BaDLAD</a>
        ), published at Interspeech 2023, ICDAR 2023.
      </p>
      <p class="hero__description">
        I am passionate about research at the intersection of AI/LLMs, security, and software engineering. I am also
        motivated to contribute research that strengthens the security, reliability and responsible use of AI and
        information system in real-world environments.
      </p>
    </div>
    <div class="hero-aside">
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
  align-items: start;
  padding: 1.5rem 2rem 0 2rem;
  gap: 3rem;
  margin: 0 auto;
  max-width: 1200px;
}

.hero__headline {
  font-size: var(--text-xl);
  font-size: clamp(var(--text-xl), 1vw + var(--text-2xl), var(--text-3xl));
  font-weight: 700;
}


.hero__description {
  font-size: clamp(var(--text-base), 1vw + var(--text-lg), var(--text-xl));
  margin-bottom: 1.5rem;
  opacity: 0.8;
  text-align: justify;
  max-width: 71ch;
  padding-right: 2rem;
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
  padding: 0 1rem 0 0.5rem;
}

@media screen and (min-width: 1024px) {
  .hero {
    padding: 1.5rem 2rem 0 2rem;
    gap: 3rem;
  }

  .hero-content {
    padding-right: 1rem;
  }

  .hero__description {
    padding-right: 1rem;
  }

  .hero-aside {
    padding: 0 1rem 0 0.5rem;
    margin-top: 5rem;
  }

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

@media screen and (max-width: 768px) {
  .hero {
    padding: 0.75rem 18px 0 18px;
    gap: 1rem;
  }

  .hero-aside {
    padding: 0;
    margin-top: 0rem;

  }
}

@media screen and (max-width: 425px) {
  .hero {
    min-height: auto;
    padding: 0.5rem 12px 0 12px;
  }

  .hero-content {
    text-align: center;
  }

  .hero__headline {
    font-size: var(--text-xl);
    letter-spacing: 1.2px;
  }

  .hero__description {
    font-size: var(--text-base);
    text-align: justify;
  }
}

@media screen and (max-width: 1024px) {
  .hero {
    padding: 1rem 18px 0 18px;
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .hero-content {
    order: 2;
  }

  .hero-aside {
    order: 1;
    justify-self: center;
  }

  .hero__description {
    max-width: none;
  }
}
</style>
