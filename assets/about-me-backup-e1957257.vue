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
    </aside>
    <main id="main-content">
      <article class="about-content">
        <h1 class="about-content__headline">About me</h1>
        <p>👋 Hey! How are you?</p>
        <p>
          I am Fazle Rabbi Rakib, currently a <strong> Lecturer </strong> at the Institute of Information and Communication Technology (IICT), <a href="https://sust.edu">Shahjalal University of Science & Technology</a>, Sylhet.
        </p>

        <p>
          As a Lecturer at SUST, I'm passionate about shaping the next wave of tech innovators. I teach a dynamic range of undergraduate courses, from Software Requirement Engineering and Object-Oriented Programming to  Web Technologies and Information and Network Security. My goal is to bridge the gap between theory and practice, infusing my industry experience into the classroom.
        </p>

        <p>
          During my professional journey, I’ve gained substantial experience as a <strong> Software Engineer </strong> at <a href="https://pathao.com">Pathao Limited</a>, where I actively contributed to developing various web portals, internal dashboards, and frontend interfaces. My time there has honed my skills in HTML, CSS, JavaScript, and VueJS—all of which form the backbone of modern frontend development.
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

        <BinaryTextSVG />
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
    margin-bottom: 2rem;
    color: var(--color-gray-800);
  }

  p {
    font-size: var(--text-lg);
    opacity: 0.8;
    max-width: 71ch;
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .intro-section {
    margin-bottom: 3rem;
    text-align: center;
    
    .greeting {
      font-size: var(--text-xl);
      font-weight: 600;
      margin-bottom: 0.5rem;
      opacity: 1;
      max-width: none;
    }
    
    .subtitle {
      font-size: var(--text-lg);
      color: var(--color-primary);
      font-weight: 500;
      opacity: 0.9;
      margin-bottom: 0;
      max-width: none;
    }
  }

  section {
    margin-bottom: 2.5rem;
    
    h2 {
      font-size: var(--text-xl);
      font-weight: 700;
      color: var(--color-gray-800);
      margin-bottom: 1rem;
      border-bottom: 2px solid var(--color-primary);
      padding-bottom: 0.5rem;
      display: inline-block;
    }
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    
    li {
      font-size: var(--text-lg);
      line-height: 1.6;
      margin-bottom: 0.75rem;
      opacity: 0.8;
      text-align: justify;
      
      strong {
        color: var(--color-primary);
        opacity: 1;
      }
      
      em {
        color: var(--color-gray-600);
        font-style: italic;
      }
    }
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
    
    > div {
      padding: 1.5rem;
      background-color: var(--accent-color-lighter, var(--color-gray-100));
      border-radius: var(--radius-default);
      border-left: 4px solid var(--color-primary);
      
      h3 {
        font-size: var(--text-lg);
        font-weight: 600;
        margin-bottom: 1rem;
        color: var(--color-gray-800);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        svg {
          color: var(--color-primary);
        }
      }
      
      p {
        font-size: var(--text-base);
        margin: 0;
        text-align: left;
        max-width: none;
      }
    }
  }

  .cta-section {
    background: linear-gradient(135deg, var(--color-primary), var(--color-accent, #ff6b6b));
    color: white;
    padding: 2rem;
    border-radius: var(--radius-default);
    text-align: center;
    margin-top: 3rem;
    
    .collaboration-invite {
      font-size: var(--text-lg);
      font-weight: 500;
      margin: 0;
      opacity: 1;
      max-width: none;
      
      svg {
        margin-right: 0.5rem;
      }
    }
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    
    &:hover {
      color: var(--color-accent, #ff6b6b);
      text-decoration: underline;
    }
  }
}

.binary-text-svg {
  font-family: var(--font-mono);
  font-size: var(--text-xl);
  position: absolute;
  left: 282px;
  top: 387px;
  opacity: 0.3;
  z-index: -1;

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

body[data-theme='dark'] .about-content {
  .about-content__headline {
    color: var(--color-default-white);
  }
  
  section h2 {
    color: var(--color-default-white);
  }
  
  .expertise-grid > div {
    background-color: var(--color-gray-800);
    
    h3 {
      color: var(--color-default-white);
    }
  }
}

@media screen and (max-width: 768px) {
  .about-content {
    .expertise-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    section {
      margin-bottom: 2rem;
    }
    
    .intro-section {
      margin-bottom: 2rem;
    }
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
  
  .about-content {
    .intro-section {
      .greeting {
        font-size: var(--text-lg);
      }
      
      .subtitle {
        font-size: var(--text-base);
      }
    }
    
    section h2 {
      font-size: var(--text-lg);
    }
    
    p, ul li {
      font-size: var(--text-base);
    }
    
    .expertise-grid > div {
      padding: 1rem;
      
      h3 {
        font-size: var(--text-base);
      }
    }
    
    .cta-section {
      padding: 1.5rem;
      
      .collaboration-invite {
        font-size: var(--text-base);
      }
    }
  }
}
</style>
