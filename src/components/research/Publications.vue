<template>
  <section class="research-contributions">
    <h2>Research & Publications</h2>
    <p>
      As a <strong>researcher</strong> affiliated with <a href="https://bengaliai.github.io/" target="_blank"
        rel="noopener noreferrer">Bengali.AI</a>,
      I contribute to advancing Bangla NLP research. My notable contributions include:
    </p>

    <div class="publication-list">
      <PublicationItem v-for="(publication, index) in publicationsData" :key="index" :title="publication.title"
        :authors="publication.authors" :venue="publication.venue" :links="publication.links" />
    </div>

    <p class="research-focus">Focus on AI/ML applications for real-world societal challenges with emphasis on
      low-resource languages.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { publicationsData as importedPublicationsData } from '@/data/publications.js'

const publicationsData = ref(importedPublicationsData)
</script>

<style scoped>
.research-contributions {
  margin-bottom: 2.5rem;
}

.research-contributions h2 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-gray-800);
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.research-contributions p {
  font-size: var(--text-lg);
  opacity: 0.8;
  max-width: min(85ch, 100%);
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.research-contributions a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.research-contributions a:hover {
  color: var(--color-accent, #ff6b6b);
  text-decoration: underline;
}

.publication-list {
  margin: 2rem 0;
}

.research-focus {
  font-style: italic;
  color: var(--color-gray-600);
  font-size: var(--text-base);
}

/* Dark theme support */
body[data-theme='dark'] .research-contributions h2 {
  color: var(--color-default-white);
}

body[data-theme='dark'] .research-contributions p {
  color: var(--color-gray-300);
}

body[data-theme='dark'] .research-contributions a {
  color: var(--color-primary);
}

body[data-theme='dark'] .research-contributions a:hover {
  color: var(--color-accent, #ff6b6b);
}

body[data-theme='dark'] .research-focus {
  color: var(--color-gray-400);
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .research-contributions h2 {
    font-size: var(--text-lg);
  }

  .research-contributions p {
    font-size: var(--text-base);
  }
}
</style>
