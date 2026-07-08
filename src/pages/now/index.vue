<template>
  <article class="article">
    <header class="now-header">
      <time class="time">July 2026 · Muharram 1448 AH</time>
      <h1 class="now-title">What I'm Up To</h1>
    </header>

    <section class="now-section">
      <h2 class="section-heading">Research</h2>
      <div v-for="entry in research" :key="entry.title" class="research-entry">
        <div class="entry-meta">
          <span class="entry-title">{{ entry.title }}</span>
          <span class="entry-period">{{ entry.period }}</span>
        </div>
        <p class="entry-desc">{{ entry.desc }}</p>
      </div>
    </section>

    <section class="now-section">
      <h2 class="section-heading">Teaching</h2>
      <p class="section-text">
        At IICT, SUST this semester: Object-Oriented Programming, Software Verification and Validation, Software Usability and Metrics, Information and Network Security.
      </p>
    </section>

    <footer class="snapshots">
      <span class="snapshots-label">Past snapshots →</span>
      <router-link class="snapshot-link" to="/now/2024-09">Sept 2024</router-link>
    </footer>
  </article>
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: '/now — Fazle Rabbi Rakib',
  meta: [
    { name: 'description', content: 'What Fazle Rabbi Rakib is up to right now — July 2026' },
    { property: 'og:title', content: '/now — Fazle Rabbi Rakib' },
    { name: 'twitter:title', content: '/now — Fazle Rabbi Rakib' },
  ],
})

const research = [
  {
    title: 'LLM-Powered C/C++ Learning Assistant',
    period: 'Apr 2025 – Present',
    desc: 'A classroom-deployed system supporting five instructional modes — General Question, Write Code, Fix Code, Explain Code, and Ask from Code — with three response formats: code, pseudo-code, and no-code. Deployed to 60 students at IICT, SUST. Currently writing up findings.',
  },
  {
    title: 'Bangla News Bias Detection',
    period: 'Sept 2025 – Present',
    desc: 'Constructing a hierarchically annotated Bangla news corpus covering stance and sentiment toward news bias. A fine-tuned transformer will be benchmarked against six LLMs outperforms all of them — suggesting task-specific fine-tuning remains superior for low-resource bias detection. Dataset preparation in progress.',
  },
  {
    title: 'SCoT for Text-to-SQL',
    period: 'Oct 2025 – Present',
    desc: 'Comparative study of SCoT, CoT, QDecomp, QDecomp_InerCol, and Standard prompting strategies for Text-to-SQL generation. Preliminary results favour SCoT due to its structured pass, candidate generation, and ranking pipeline. Writing up.',
  },
]
</script>

<style scoped>
:global(#app) {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.article {
  width: min(100ch, 100% - 2rem);
  margin-left: auto;
  margin-right: auto;
  padding: 2rem 0;
}

.now-header {
  margin-bottom: 2rem;
}

.time {
  display: block;
  text-transform: uppercase;
  font-size: var(--text-base);
  letter-spacing: 2px;
  font-family: var(--font-mono);
  color: var(--color-gray-200);
  margin-bottom: 0.5rem;
}

.now-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  margin: 0;
}

.now-section {
  margin-bottom: 2rem;
}

.section-heading {
  font-size: var(--text-xl);
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: var(--color-primary);
}

.section-text {
  font-size: var(--text-lg);
  line-height: 1.7;
  margin: 0;
  opacity: 0.85;
}

.research-entry {
  background-color: var(--bg-color-lighter, rgba(0, 0, 0, 0.02));
  border-left: 3px solid var(--color-primary);
  border-radius: 0 var(--radius-default) var(--radius-default) 0;
  padding: 0.875rem 1rem;
  margin-bottom: 1rem;
}

body[data-theme='dark'] .research-entry {
  background-color: var(--color-gray-800);
}

.entry-meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  margin-bottom: 0.5rem;
}

.entry-title {
  font-size: var(--text-base);
  font-weight: 600;
  line-height: 1.4;
}

.entry-period {
  font-size: var(--text-sm);
  font-family: var(--font-mono);
  color: var(--color-gray-200);
  white-space: nowrap;
}

.entry-desc {
  font-size: var(--text-base);
  line-height: 1.7;
  margin: 0;
  opacity: 0.85;
}

.snapshots {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color, rgba(128, 128, 128, 0.2));
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: var(--text-sm);
}

.snapshots-label {
  font-family: var(--font-mono);
  color: var(--color-gray-200);
}

.snapshot-link {
  color: var(--color-primary);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}

.snapshot-link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 640px) {
  .now-title {
    font-size: var(--text-2xl);
  }

  .section-heading {
    font-size: var(--text-lg);
  }

  .section-text,
  .entry-desc {
    font-size: var(--text-base);
  }
}
</style>
