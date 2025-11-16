<template>
  <section class="ongoing-research-section">
    <h2>Ongoing Research</h2>
    <p>
      I am currently working on several research projects that explore the intersection of AI, NLP, prompt engineering, LLMs and security. These projects focus on practical applications and aim to address real-world challenges:
    </p>

    <div class="ongoing-research-list">
      <OngoingResearchItem v-for="(research, index) in ongoingResearchData" :key="index" :title="research.title"
        :period="research.period" :description="research.description" :tags="research.tags" :status="research.status"
        :statusText="research.statusText" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const ongoingResearchData = ref([
  {
    title: "Integrating LLMs for Effective C/C++ Learning: Opportunities and Impacts",
    period: "Apr 2025 – Present",
    description: "Built a classroom-deployed LLM-powered system that supports five instructional modes — General Question, Write Code, Fix Code, Explain Code, and Ask from Code — enabling students to receive structured, context-aware assistance while learning C/C++ programming. Implemented dynamic prompt templates, in-app feedback (ratings & checklists), and structured issue reporting; currently deployed to a cohort of 60 students and used to iteratively refine prompts.",
    tags: ['Prompt Engineering', 'LLM', 'Personalized Learning'],
    status: "active",
    statusText: "Ongoing"
  },
  {
    title: "BANMedBias: A Study of Media Bias and Credibility in Bangladesh",
    period: "Sept 2025 – Present",
    description: "Reviewed research on Bangla and cross-cultural media bias corpora, including dataset construction, annotation for stance and sentiment, and to guide the development of a Bangla news bias detection dataset and model pipeline for evaluating media framing and polarization patterns.",
    tags: ['Media Bias Detection', 'Political Ideology', 'News Credibility', 'Sentiment Analysis', 'Bangla NLP'],
    status: "active",
    statusText: "Ongoing"
  }
])
</script>

<style scoped>
.ongoing-research-section {
  margin-bottom: 2.5rem;
}

.ongoing-research-section h2 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-gray-800);
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.ongoing-research-section p {
  font-size: var(--text-lg);
  opacity: 0.8;
  max-width: min(85ch, 100%);
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.ongoing-research-list {
  margin: 2rem 0;
}

/* Dark theme support */
body[data-theme='dark'] .ongoing-research-section h2 {
  color: var(--color-default-white);
}

body[data-theme='dark'] .ongoing-research-section p {
  color: var(--color-gray-300);
}

body[data-theme='dark'] .ongoing-research-section a {
  color: var(--color-primary);
}

body[data-theme='dark'] .ongoing-research-section a:hover {
  color: var(--color-accent, #ff6b6b);
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .ongoing-research-section h2 {
    font-size: var(--text-lg);
  }

  .ongoing-research-section p {
    font-size: var(--text-base);
  }
}
</style>
