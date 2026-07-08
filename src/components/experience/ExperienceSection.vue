<template>
  <section id="experience" class="experience-section container">
    <h3>Experience</h3>

    <div class="experience-timeline">
      <div v-for="(entry, index) in experiences" :key="index" class="experience-item">
        <div :class="['experience-icon', entry.icon]">
          <svg v-if="entry.icon === 'industry'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zm8 16H4V8h16v12z"/>
          </svg>
          <svg v-else-if="entry.icon === 'academia'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l11 6 9-4.91V17H23V9L12 3zM5 13.18v4C5 19.46 8.33 21 12 21s7-1.54 7-3.82v-4L12 17l-7-3.82z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>

        <div class="experience-content">
          <div class="experience-header">
            <div class="experience-title-group">
              <h4 class="experience-role">{{ entry.role }}</h4>
              <p class="experience-org">
                <a v-if="entry.orgUrl" :href="entry.orgUrl" target="_blank" rel="noopener noreferrer">{{ entry.org }}</a><span v-else>{{ entry.org }}</span><span v-if="entry.orgNote"> — {{ entry.orgNote }}</span>
              </p>
              <p v-if="entry.progression" class="experience-progression">{{ entry.progression }}</p>
            </div>
            <span class="experience-period">{{ entry.period }}</span>
          </div>

          <ul v-if="entry.bullets && entry.bullets.length" class="experience-list">
            <li v-for="(bullet, i) in entry.bullets" :key="i">{{ bullet }}</li>
          </ul>

          <div v-if="entry.courses && entry.courses.length" class="courses-block">
            <h5>Courses Taught</h5>
            <ul class="course-grid">
              <li v-for="(course, i) in entry.courses" :key="i">{{ course }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    role: 'Lecturer',
    org: 'Institute of Information and Communication Technology (IICT), Shahjalal University of Science & Technology',
    orgUrl: 'https://sust.edu',
    orgNote: null,
    period: 'Nov 2023 – Present',
    icon: 'academia',
    bullets: [
      'Teaching core undergraduate courses in software engineering, web technologies, security, and image processing.',
      'Actively collaborate with students and colleagues on ongoing research in NLP, LLMs, and software engineering.',
    ],
    courses: [
      'Software Requirement Engineering',
      'Object-Oriented Programming',
      'Web Technologies',
      'Software Usability and Metrics',
      'Software Verification and Validation',
      'Digital Image Processing',
      'Information and Network Security',
      'Computer Graphics and Image Processing',
    ],
  },
  {
    role: 'Undergraduate Research Supervisor',
    org: 'Institute of Information and Communication Technology (IICT), Shahjalal University of Science & Technology',
    orgUrl: 'https://sust.edu',
    orgNote: null,
    period: 'Mar 2024 – Present',
    icon: 'academia',
    bullets: [
      'Mentored 7 undergraduate research groups (4 ongoing, 3 completed) spanning AI, NLP, software engineering, and LLMs.',
      'Guide students through the full research lifecycle: problem formulation → literature review → methodology → evaluation → academic writing.',
    ],
    courses: [],
  },
  {
    role: 'Software Engineer',
    org: 'Pathao Limited',
    orgUrl: 'https://pathao.com',
    orgNote: "Bangladesh's leading digital services platform",
    progression: 'Intern → Associate Software Engineer → Software Engineer I',
    period: 'Jun 2022 – Dec 2023',
    icon: 'industry',
    bullets: [
      'Built Pathao Pay web portals enabling secure payment workflows across ride and food services.',
      'Developed internal dashboards for notification management and ride operations.',
      'Remediated security-audit vulnerabilities, hardening the frontend against identified threats.',
      'Designed and maintained a reusable frontend component library shared across teams.',
    ],
    courses: [],
  },
  {
    role: 'Research Assistant',
    org: 'Bengali.AI',
    orgUrl: 'https://bengali.ai',
    orgNote: null,
    period: 'Oct 2021 – Jan 2023',
    icon: 'research',
    bullets: [
      'Led and supervised 20+ annotators for OOD-Speech data collection and QA across Bengali dialect regions.',
      'Designed annotation protocols and validation workflows to ensure dataset quality and consistency.',
      'Collected and curated document images contributing to the BaDLAD document layout analysis dataset.',
    ],
    courses: [],
  },
])
</script>

<style scoped>
.experience-section {
  margin-bottom: 2rem;
  flex: auto;
  flex-direction: column;
  scroll-margin-top: 80px;
}

.experience-section h3 {
  margin: 0 0 0.75rem 0;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-gray-800);
}

body[data-theme='dark'] .experience-section h3 {
  color: var(--color-default-white);
}

.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.experience-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 0.25rem;
}

.experience-content {
  flex: 1;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experience-title-group {
  flex: 1;
  min-width: 0;
}

.experience-role {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-gray-800);
  margin: 0 0 0.25rem 0;
}

body[data-theme='dark'] .experience-role {
  color: var(--color-default-white);
}

.experience-org {
  font-size: var(--text-base);
  opacity: 0.8;
  margin: 0;
  line-height: 1.5;
}

.experience-org a {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}

.experience-org a:hover {
  text-decoration: underline;
}

.experience-progression {
  font-size: var(--text-sm);
  opacity: 0.7;
  margin: 0.25rem 0 0 0;
  font-style: italic;
}

.experience-period {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  background-color: var(--bg-color-primary-lighter, rgba(26, 188, 209, 0.1));
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-default);
  white-space: nowrap;
  align-self: flex-start;
  margin-top: 0.1rem;
}

.experience-list {
  margin: 0;
  padding-left: 1.5rem;
  list-style-type: disc;
}

.experience-list li {
  font-size: var(--text-base);
  line-height: 1.6;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.courses-block {
  margin-top: 0.75rem;
}

.courses-block h5 {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-gray-800);
  margin: 0 0 0.5rem 0;
  text-decoration: underline;
}

body[data-theme='dark'] .courses-block h5 {
  color: var(--color-default-white);
}

.course-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem 2rem;
  padding-left: 1.5rem;
  list-style-type: disc;
  margin: 0;
}

.course-grid li {
  font-size: var(--text-base);
  line-height: 1.6;
  opacity: 0.8;
}

@media screen and (max-width: 1024px) {
  .experience-section {
    padding-left: 18px;
    padding-right: 18px;
  }
}

@media screen and (max-width: 768px) {
  .experience-section h3 {
    font-size: var(--text-xl);
  }

  .experience-item {
    gap: 0.75rem;
  }

  .experience-icon {
    width: 40px;
    height: 40px;
  }

  .course-grid {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}

@media screen and (max-width: 480px) {
  .experience-section {
    padding-left: 12px;
    padding-right: 12px;
  }

  .experience-section h3 {
    font-size: var(--text-lg);
  }

  .experience-role {
    font-size: var(--text-base);
  }

  .experience-icon {
    width: 36px;
    height: 36px;
  }

  .experience-header {
    gap: 0.25rem;
  }

  .experience-period {
    font-size: var(--text-xsm);
    padding: 0.2rem 0.5rem;
  }
}
</style>
