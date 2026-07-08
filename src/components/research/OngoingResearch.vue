<template>
  <section class="ongoing-research-section container">
    <h3>Ongoing Research</h3>
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
    tags: ['AI for Education','Prompt Engineering', 'LLM', 'Personalized Learning'],
    status: "active",
    statusText: "Ongoing"
  },
  {
    title: "Bangla News Bias Detection Dataset with Hierarchical Annotation and Benchmarking",
    period: "Sept 2025 – Present",
    description: "Building a structured Bangla news bias corpus with hierarchical stance and sentiment annotation. Fine-tuned a transformer model benchmarked against six LLMs, outperforming all baselines; evaluating media framing and polarization patterns in Bangladeshi news.",
    tags: ['Media Bias Detection', 'Bangla NLP', 'LLMs', 'Benchmarking'],
    status: "active",
    statusText: "Ongoing"
  },
  {
    title: "Evaluation of SCoT with different prompting strategies for Text-to-SQL generation",
    period: "Oct 2025 – Present",
    description: "A comparative study of Structured Chain-of-Thought (SCoT), CoT, QDecomp, QDecomp_InerCol and Standard prompting strategies for the Text-to-SQL generation task.",
    tags: ['NLP', 'Text-to-SQL', 'Databases', 'Prompting Strategies', 'LLMs'],
    status: "active",
    statusText: "Ongoing"
  }
])
</script>

<style scoped>
.ongoing-research-section {
  margin-bottom: 2rem;
  flex: auto;
  flex-direction: column;
  scroll-margin-top: 80px;
}

.ongoing-research-section h3 {
  margin: 0 0 0.75rem 0;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-gray-800);
}

.ongoing-research-section p {
  font-size: var(--text-lg);
  opacity: 0.8;
  max-width: min(85ch, 100%);
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.ongoing-research-list {
  margin-top: 0.75rem;
}

/* Dark theme support */
body[data-theme='dark'] .ongoing-research-section h3 {
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
@media screen and (max-width: 1024px) {
  .ongoing-research-section {
    padding-left: 18px;
    padding-right: 18px;
    margin-top: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .ongoing-research-section h3 {
    font-size: var(--text-xl);
  }

  .ongoing-research-section p {
    font-size: var(--text-base);
  }
}

@media screen and (max-width: 480px) {
  .ongoing-research-section {
    padding-left: 12px;
    padding-right: 12px;
  }

  .ongoing-research-section h3 {
    font-size: var(--text-lg);
  }
}
</style>
