<template>
  <section id="publications" class="publications-research container">
    <h3>Publications & Research</h3>

    <!-- Published Works -->
    <div class="publications-grid">
      <PublicationItem v-for="(publication, index) in publishedWorks" :key="index" :title="publication.title"
        :authors="publication.authors" :venue="publication.venue" :links="publication.links" />
    </div>

    <!-- View All Articles Button -->
    <div class="articles-cta">
      <AppLink to="/articles" class="articles-button">
        <font-awesome-icon icon="fa fa-arrow-right" />
        <span>View All Articles & Details</span>
      </AppLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { publicationsData } from '@/data/publications.js'

// Use shared publications data
const publishedWorks = ref(publicationsData)


</script>

<style scoped>
.publications-research {
  flex: auto;
  flex-direction: column;
  scroll-margin-top: 80px;
}

.publications-research h3 {
  margin: 0 0;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-gray-800);
  margin-bottom: 2rem;
}

/* Dark theme support */
body[data-theme='dark'] .publications-research h3 {
  color: var(--color-default-white);
}

body[data-theme='dark'] .publications-research p {
  color: var(--color-gray-300);
}

body[data-theme='dark'] .publications-research a {
  color: var(--color-primary);
}

body[data-theme='dark'] .publications-research a:hover {
  color: var(--color-accent, #ff6b6b);
}

.publications-grid {
  display: flex;
  flex-direction: column;
}

.articles-cta {
  display: flex;
  justify-content: center;
}

.articles-button {
  --shadow-opacity: 0;
  --shadow-h: 0;
  --shadow-s: 0%;
  --shadow-l: 0%;

  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 8px 16px;
  background: transparent;
  color: #F4F4F4;
  text-decoration: none;
  border-radius: var(--radius-default);
  border: 1px solid var(--color-gray-600);
  font-weight: 500;
  font-size: var(--text-base);
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
  transition-property: transform, fill, box-shadow, border-color;
  will-change: transform;
  box-shadow: 1px 4px 8px 1px hsla(var(--shadow-h), var(--shadow-s), var(--shadow-l), var(--shadow-opacity));
  outline: 0;
}

.articles-button:hover {
  --shadow-opacity: 0.25;
  transform: translateY(-8px);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.articles-button:hover svg,
.articles-button:hover svg path {
  fill: var(--color-primary);
}

.articles-button:focus {
  --shadow-h: 187;
  --shadow-s: 78%;
  --shadow-l: 46%;
  --shadow-opacity: 0.5;
}

/* Light theme button styling */
body[data-theme='light'] .articles-button {
  color: var(--color-default-black);
  border-color: var(--color-gray-400);
}

body[data-theme='light'] .articles-button svg,
body[data-theme='light'] .articles-button svg path {
  fill: var(--color-default-black);
}

.articles-button svg {
  transition: transform 0.3s ease;
}

.articles-button:hover svg {
  transform: translateX(4px);
}



/* Responsive design */
@media screen and (max-width: 1024px) {
  .publications-research {
    padding-left: 18px;
    padding-right: 18px;
  }


}

@media screen and (max-width: 768px) {
  .publications-research h3 {
    font-size: var(--text-xl);
  }


}

@media screen and (max-width: 480px) {
  .publications-research {
    padding-left: 12px;
    padding-right: 12px;
  }

  .publications-research h3 {
    font-size: var(--text-base);
  }

  .publications-grid {
    gap: 1rem;
  }

  .articles-button {
    padding: 6px 12px;
    font-size: var(--text-sm);
    gap: 0.375rem;
  }
}
</style>
