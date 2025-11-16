<template>
  <section class="interest-section container">
    <h3>Research Interests</h3>
    <div class="interest-grid">
      <div v-for="(interest, index) in researchInterests" :key="index" class="interest-item">
        <li class="interest-text">
          {{ interest }}
        </li>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const researchInterests = ref([
  'LLMs, data mining, and AI/ML applications for real-world societal challenges',
  'Adversarial threat analysis and vulnerability detection across Web, IoT, and AI-enabled platforms',
  'Empirical software engineering: software design, development, testing, debugging, and developer-centric tools',
  'Safety, robustness, and factuality of AI/LLM systems',
  'Misinformation detection and automated fact-checking in information systems',
  'Advanced prompting and small-model engineering for resource-constrained, real-world environments'
])
</script>

<style scoped>
.interest-section {
  margin-bottom: 2rem;
  flex: auto;
  flex-direction: column;
}

.interest-section h3 {
  margin: 0 0;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-gray-800);
}

body[data-theme='dark'] .interest-section h3 {
  color: var(--color-default-white);
}

.interest-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 0.75rem;
}

.interest-item {
  background-color: var(--color-gray-100);
  background-color: var(--accent-color-lighter, var(--color-gray-800));
  border-radius: var(--radius-default);
  padding: 0.75rem;
  box-shadow: var(--elevation-1);
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

body[data-theme='dark'] .interest-item {
  background-color: var(--color-gray-800);
}

.interest-item:hover {
  box-shadow: var(--elevation-3);
  transform: translateY(-2px);
}

.interest-text {
  color: inherit;
  line-height: 1.6;
  margin-left: 1rem;
  font-size: var(--text-lg);
  opacity: 0.8;
  max-width: 71ch;
  text-align: justify;
}

body[data-theme='dark'] .interest-text {
  opacity: 0.8;
}

@media screen and (min-width: 1024px) {
  .interest-text {
    max-width: none;
  }
}

@media screen and (max-width: 1024px) {
  .interest-section {
    padding-left: 18px;
    padding-right: 18px;
  }
}

@media screen and (max-width: 768px) {
  .interest-section h3 {
    font-size: var(--text-xl);
  }
}

@media screen and (max-width: 480px) {
  .interest-section {
    padding-left: 12px;
    padding-right: 12px;
  }

  .interest-section h3 {
    font-size: var(--text-lg);
  }

  .interest-text {
    font-size: var(--text-base);
  }
}
</style>
