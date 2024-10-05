<template>
  <div class="container">
    <aside>
      <HeroAvatar>
        <img
          src="@/assets/img/profile.jpg"
          alt="me"
          width="140"
          height="180"
          loading="lazy"
        />
      </HeroAvatar>
      <BinaryTextSVG />
    </aside>
    <main id="main-content">
      <article class="about-content">
        <h1 class="about-content__headline">About me</h1>
        <p>👋 Hey! How are you?</p>
        <p>
          I am Fazle Rabbi Rakib, currently a <strong> Lecturer </strong> at the Institute of Information and Communication Technology (IICT), <a href="https://sust.edu">Shahjalal University of Science & Technology</a>, Sylhet.
        </p>
        <p>
          During my professional journey, I’ve gained substantial experience as a <strong> Software Engineer </strong> at <a href="https:pathao.com">Pathao Limited</a>, where I actively contributed to developing various web portals, internal dashboards, and frontend interfaces. My time there has honed my skills in HTML, CSS, JavaScript, and VueJS—all of which form the backbone of modern frontend development.
        </p>

        <p>
          As a <strong>researcher</strong> at <a href="https://bengaliai.github.io/">Bengali.AI</a>, a open-source collaboration for Bangla NLP, I’ve worked on exciting projects involving NLP and open-source datasets.
        </p>

        <p>
          <font-awesome-icon icon="fa fa-wand-magic-sparkles" />
          I have a keen interest in frontend development, especially in creating engaging, responsive, and accessible web applications. My hands-on experience with Tailwind CSS and VueJS, coupled with my understanding of user interface (UI) design and problem-solving, enables me to turn creative ideas into real, functional websites.
        </p>

        <p>
          <font-awesome-icon icon="fa fa-snowflake" />
          I’m passionate about bridging the gap between research and real-world applications, always looking for innovative ways to make technology more accessible.
        </p>

        <SocialMediaIcons boxed />
      </article>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import config from '../config/siteconfig.json'

const title = 'About me • Fazle Rabbi Rakib'
const { description } = config
const route = useRoute()

useHead({
  title,
  meta: [
    {
      name: 'description',
      content: description,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: `${config.siteUrl}${route.path}` },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: description,
    },
  ],
})
</script>

<route lang="yaml">
meta:
  layout: default
</route>

<style lang="css" scoped>
:global(#app) {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.container {
  flex-flow: row wrap;
  padding: 3rem 0;
}

main {
  padding: 1.2rem 2.4rem;
}

.about-content {
  .about-content__headline {
    font-size: var(--text-2xl);
  }

  p {
    font-size: var(--text-lg);
    opacity: 0.8;
    max-width: 71ch;
    text-align: justify;
  }
}

.binary-text-svg {
  font-family: var(--font-mono);
  font-size: var(--text-xl);
  position: absolute;
  left: 282px;
  top: 387px;
  opacity: 0.3;

  & :deep(tspan) {
    --text-delay: 500ms;

    opacity: 0;
    animation: pulse-spread 3s var(--text-delay) ease-out infinite alternate;

    &:nth-child(1) {
      --text-delay: 500ms;
    }

    &:nth-child(2) {
      --text-delay: 1s;
    }

    &:nth-child(3) {
      --text-delay: 1.5s;
    }

    &:nth-child(4) {
      --text-delay: 2s;
    }

    &:nth-child(5) {
      --text-delay: 2.5s;
    }

    &:nth-child(6) {
      --text-delay: 3s;
    }
  }
}

@keyframes pulse-spread {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.3;
  }
}

@media screen and (min-width: 426px) and (max-width: 768px) {
  aside {
    margin-left: 40px;
    padding: 0 2.4rem 0 0;
  }
}

@media screen and (max-width: 425px) {
  aside {
    padding: 0 1rem;
  }

  .container {
    height: 100%;
  }

  .binary-text-svg {
    top: 50%;
    left: 0;
    bottom: 0;
  }
}
</style>
