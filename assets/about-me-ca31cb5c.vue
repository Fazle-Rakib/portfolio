<template>
  <div class="container">
    <aside>
      <HeroAvatar>
        <img src="@/assets/img/profile.jpg" alt="me" width="140" height="180" loading="lazy" />
      </HeroAvatar>
    </aside>
    <main id="main-content" class="mt-4 sm:mt-0">
      <article class="about-content">
        <h1 class="about-content__headline">About me</h1>

        <div class="intro-section">
          <p class="greeting">👋 Hello! I'm <strong>Fazle Rabbi Rakib</strong></p>
          <p class="subtitle">Lecturer • Researcher • Software Engineer</p>
        </div>

        <section class="professional-overview">
          <h2>Professional Overview</h2>
          <p>
            I am currently a <strong>Lecturer</strong> at the Institute of Information and Communication Technology
            (IICT),
            <a href="https://sust.edu" target="_blank" rel="noopener noreferrer">Shahjalal University of Science &
              Technology</a>,
            where I combine my passion for education with cutting-edge research in software engineering and artificial
            intelligence. You can reach me at <a href="mailto:rakib-iict@sust.edu"
              class="email-link">rakib-iict@sust.edu</a>.
          </p>

          <p>
            With a <strong>BSc. in Software Engineering</strong> (GPA: 3.93/4.00, ranked 1st out of 50 students) from
            SUST,
            I bring both academic excellence and industry experience to my role as an educator and researcher.
          </p>
        </section>

        <section class="academic-focus">
          <h2>Academic & Teaching Excellence</h2>
          <p>
            As a faculty member at SUST, I'm dedicated to shaping the next generation of technology leaders. I teach
            core undergraduate courses including:
          </p>
          <ul class="course-list">
            <li>Software Requirement Engineering</li>
            <li>Object-Oriented Programming</li>
            <li>Numerical Analysis</li>
            <li>Web Technologies</li>
            <li>Software Usability and Metrics</li>
            <li>Digital Image Processing</li>
            <li>Information and Network Security</li>
            <li>Computer Graphics and Image Processing</li>
          </ul>
          <p>
            My teaching philosophy centers on bridging theoretical concepts with practical applications,
            ensuring students gain both foundational knowledge and industry-relevant skills.
          </p>
        </section>

        <section class="industry-experience">
          <h2>Industry Experience</h2>
          <p>
            Before joining academia, I spent two years as a <strong>Software Engineer</strong> at
            <a href="https://pathao.com" target="_blank" rel="noopener noreferrer">Pathao Limited</a>,
            Bangladesh's leading digital services platform. During my tenure, I:
          </p>
          <ul class="experience-list">
            <li>Developed and maintained multiple web portals and internal dashboards</li>
            <li>Specialized in frontend development using modern technologies</li>
            <li>Collaborated on scalable solutions serving millions of users</li>
            <li>Gained expertise in HTML5, CSS3, JavaScript (ES6+), and Vue.js</li>
          </ul>
        </section>

        <section class="research-contributions">
          <h2>Research & Publications</h2>
          <p>
            As a <strong>researcher</strong> affiliated with <a href="https://bengaliai.github.io/" target="_blank"
              rel="noopener noreferrer">Bengali.AI</a>,
            I contribute to advancing Bangla NLP research. My notable contributions include:
          </p>

          <div class="publication-list">
            <PublicationItem
              title="OOD-Speech: A Large Bengali Speech Recognition Dataset for Out-of-Distribution Benchmarking"
              authors="<strong>FR Rakib</strong>, SS Dip, S Alam, +11 authors"
              venue="Accepted in Interspeech 2023 (later withdrawn from proceedings), pages 879-883, August 2023"
              :links="[
                { url: 'https://fazle-rakib.github.io/portfolio/articles/ood-speech-benchmark-dataset-bengali-asr', type: 'blog', label: 'Blog Post' },
                { url: 'https://bengaliai.github.io/asr', type: 'project', label: 'Project Page' },
                { url: 'https://arxiv.org/abs/2305.09688', type: 'paper', label: 'Paper' },
                { url: 'https://commonvoice.mozilla.org/bn/datasets', type: 'dataset', label: 'Dataset' },
                { url: 'https://www.kaggle.com/competitions/bengaliai-speech', type: 'kaggle', label: 'Competition' }
              ]" />

            <PublicationItem title="BaDLAD: A Large Multi-Domain Bengali Document Layout Analysis Dataset"
              authors="MIH Shihab, MR Hasan, M Rahman, SM Hossen, MN Ansary, I Ahmed, <strong>FR Rakib</strong>, +10 authors"
              venue="International Conference on Document Analysis and Recognition (ICDAR), pages 326-341, August 2023"
              :links="[
                { url: 'https://fazle-rakib.github.io/portfolio/articles/badlad-document-layout-dataset', type: 'blog', label: 'Blog Post' },
                { url: 'https://bengaliai.github.io/badlad', type: 'project', label: 'Project Page' },
                { url: 'https://arxiv.org/abs/2303.05325', type: 'paper', label: 'Paper' },
                { url: 'https://github.com/BengaliAI/BADLAD', type: 'github', label: 'Dataset' },
                { url: 'https://www.kaggle.com/competitions/dlsprint2', type: 'kaggle', label: 'Competition' }
              ]" />


          </div>

          <p class="research-focus">Focus on AI/ML applications for real-world societal challenges with emphasis on
            low-resource languages.</p>
        </section>

        <section class="expertise-interests">
          <h2>Technical Expertise & Research Interests</h2>
          <div class="expertise-grid">
            <div class="tech-stack">
              <h3>
                <font-awesome-icon icon="fa fa-code" />
                Technical Skills
              </h3>
              <p>Frontend Development, Vue.js, JavaScript, HTML5/CSS3, Tailwind CSS, UI/UX Design,
                Web Technologies, Database Systems, Software Architecture</p>
            </div>

            <div class="research-interests">
              <h3>
                <font-awesome-icon icon="fa fa-microscope" />
                Research Focus
              </h3>
              <p>AI/LLMs, NLP, Software Engineering, Cybersecurity, Data Mining,
                Empirical Software Engineering, AI Safety & Robustness</p>
            </div>
          </div>
        </section>

        <section class="personal-mission">
          <h2>Mission & Vision</h2>
          <p>
            <font-awesome-icon icon="fa fa-lightbulb" />
            I'm passionate about <strong>bridging the gap between academic research and real-world
              applications</strong>.
            My goal is to make technology more accessible and impactful, whether through innovative research,
            effective teaching, or developing solutions that address societal challenges.
          </p>

          <p>
            <font-awesome-icon icon="fa fa-bullseye" />
            I believe in the power of <strong>interdisciplinary collaboration</strong> and am always eager to explore
            new challenges at the intersection of AI, software engineering, and security.
          </p>
        </section>
        <CTASection />
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
  display: grid;
  grid-template-columns: minmax(250px, 300px) 1fr;
  gap: 2.5rem;
  padding: 3rem 2rem;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
}

aside {
  top: 2rem;
}

main {
  padding: 1.2rem 2.4rem;
  min-width: 0;
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
    max-width: min(85ch, 100%);
    text-align: justify;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .intro-section {
    margin-bottom: 3rem;

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
    list-style-type: disc;

    li {
      font-size: var(--text-lg);
      line-height: 1.6;
      margin-bottom: 0.75rem;
      opacity: 0.8;
      text-align: justify;
      display: list-item;
      list-style-position: outside;

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

  .course-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;

    li {
      break-inside: avoid;
    }
  }

  .publication-list {
    margin: 2rem 0;
  }

  .research-focus {
    font-style: italic;
    color: var(--color-gray-600);
    font-size: var(--text-base);
  }

  .publication-list {
    margin: 2rem 0;
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
    align-items: stretch;

    >div {
      padding: 1.5rem;
      background-color: var(--accent-color-lighter, var(--color-gray-100));
      border-radius: var(--radius-default);
      border-left: 4px solid var(--color-primary);
      display: flex;
      flex-direction: column;
      min-height: 100%;

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
        flex: 1;
        line-height: 1.5;
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

@media screen and (min-width: 769px) and (max-width: 1024px) {
  .container {
    gap: 1.5rem;
  }

  aside {
    padding: 0 1rem 0 0;
  }
}

body[data-theme='dark'] .about-content {
  .about-content__headline {
    color: var(--color-default-white);
  }

  section h2 {
    color: var(--color-default-white);
  }

  .expertise-grid>div {
    background-color: var(--color-gray-800);

    h3 {
      color: var(--color-default-white);
    }
  }

  .research-focus {
    color: var(--color-gray-400);
  }
}

@media screen and (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem 0;
  }

  aside {
    position: static;
    justify-self: center;
    padding: 0;
  }

  main {
    padding: 0 1rem;
  }

  .binary-text-svg {
    position: relative;
    top: auto;
    left: auto;
    bottom: auto;
    opacity: 0.1;
  }

  .about-content {
    .about-content__headline {
      text-align: center;
    }

    .expertise-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    section {
      margin-bottom: 2rem;
    }

    .intro-section {
      margin-bottom: 2rem;
      text-align: center;

      p {
        text-align: center;
      }

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

    p,
    ul li {
      font-size: var(--text-base);
    }

    .expertise-grid>div {
      padding: 1rem;

      h3 {
        font-size: var(--text-base);
      }
    }

    .course-list {
      grid-template-columns: 1fr;
      gap: 0;
    }



  }
}

@media screen and (max-width: 425px) {
  main {
    padding: 0 0.5rem;
  }
}
</style>
