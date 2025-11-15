<template>
  <section id="education" class="education-section container">
    <h3>Education</h3>
    <div class="education-timeline">
      <div v-for="(education, index) in educationHistory" :key="index" class="education-item">
        <div class="education-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3L1 9L12 15L21 11.09V17H23V9L12 3ZM5 13.18V17.18C5 19.46 8.33 21 12 21S19 19.46 19 17.18V13.18L12 17L5 13.18Z"
              fill="currentColor" />
          </svg>
        </div>
        <div class="education-content">
          <div class="education-header">
            <h4 class="education-degree">{{ education.degree }}</h4>
            <span class="education-year">{{ education.year }}</span>
          </div>
          <p class="education-institution">{{ education.institution }}</p>
          <p v-if="education.gpa" class="education-gpa">{{ education.gpa }}</p>
          <div v-if="education.courses" class="education-courses">
            <h5>Relevant Courses</h5>
            <p class="courses-text">{{ education.courses }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const educationHistory = ref([
  {
    degree: 'BSc. in Software Engineering',
    year: '2023',
    institution: 'Shahjalal University of Science and Technology, Sylhet',
    gpa: 'GPA: 3.93/4.00 - [1st/50]',
    courses: 'Data Structure and Algorithms, Introduction to Software Engineering, Software Requirement Engineering, Object Oriented Programming, Operating Systems and system programming, Computer Networking, Database Management System, Software Architecture and Design Patterns, Software Verification and Validation, Software Usability and Metrics, Software Project Management, Introduction to Data Science, Artificial Intelligence, Machine Learning, Computer and Network Security.'
  },
  {
    degree: 'Higher Secondary School Certificate',
    year: '2017',
    institution: 'Notre Dame College, Dhaka',
    gpa: 'GPA: 5.00/5.00'
  }
])
</script>

<style scoped>
.education-section {
  margin-bottom: 2rem;
  flex: auto;
  flex-direction: column;
  scroll-margin-top: 80px;
}

.education-section h3 {
  margin: 0 0;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-gray-800);
}

body[data-theme='dark'] .education-section h3 {
  color: var(--color-default-white);
}

.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 0.75rem;
}

.education-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.education-icon {
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

.education-content {
  flex: 1;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.education-degree {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-gray-800);
  margin: 0;
}

body[data-theme='dark'] .education-degree {
  color: var(--color-default-white);
}

.education-year {
  font-size: var(--text-md);
  font-weight: 600;
  color: var(--color-primary);
  background-color: var(--color-primary-lighter, rgba(26, 188, 209, 0.1));
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-default);
}

.education-institution {
  font-size: var(--text-lg);
  font-weight: 400;
  color: inherit;
  margin: 0 0 0.25rem 0;
  opacity: 0.8;
  line-height: 1.6;
}

body[data-theme='dark'] .education-institution {
  opacity: 0.8;
}

.education-gpa {
  font-size: var(--text-lg);
  font-weight: 400;
  color: inherit;
  margin: 0 0 0.75rem 0;
  opacity: 0.8;
  line-height: 1.6;
}

body[data-theme='dark'] .education-gpa {
  opacity: 0.8;
}

.education-courses {
  margin-top: 0.75rem;
}

.education-courses h5 {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-gray-800);
  margin: 0 0 0.5rem 0;
  text-decoration: underline;
}

body[data-theme='dark'] .education-courses h5 {
  color: var(--color-default-white);
}

.courses-text {
  font-size: var(--text-lg);
  font-weight: 400;
  color: inherit;
  line-height: 1.6;
  margin: 0;
  opacity: 0.8;
  text-align: justify;
}

body[data-theme='dark'] .courses-text {
  opacity: 0.8;
}

@media screen and (max-width: 1024px) {
  .education-section {
    padding-left: 18px;
    padding-right: 18px;
  }

  .education-timeline {
    gap: 1.5rem;
  }
}

@media screen and (max-width: 768px) {
  .education-section h3 {
    font-size: var(--text-xl);
  }

  .education-timeline {
    gap: 1.25rem;
  }

  .education-item {
    gap: 0.75rem;
  }

  .education-icon {
    width: 40px;
    height: 40px;
    margin-top: 0.125rem;
  }

  .education-degree {
    font-size: var(--text-md);
  }

  .education-institution,
  .education-gpa,
  .courses-text {
    font-size: var(--text-base);
  }

  .education-courses h5 {
    font-size: var(--text-base);
  }

  .education-year {
    font-size: var(--text-sm);
    padding: 0.125rem 0.5rem;
  }
}

@media screen and (max-width: 640px) {
  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .education-year {
    align-self: flex-start;
    margin-top: 0.25rem;
  }

  .education-item {
    gap: 0.5rem;
  }

  .education-icon {
    width: 36px;
    height: 36px;
  }

  .education-timeline {
    gap: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .education-section {
    padding-left: 12px;
    padding-right: 12px;
  }

  .education-section h3 {
    font-size: var(--text-lg);
  }

  .education-degree {
    font-size: var(--text-base);
  }

  .education-institution,
  .education-gpa,
  .courses-text,
  .education-courses h5 {
    font-size: var(--text-sm);
  }

  .education-year {
    font-size: var(--text-xs);
    padding: 0.125rem 0.375rem;
  }

  .education-icon {
    width: 32px;
    height: 32px;
  }

  .courses-text {
    text-align: left;
  }
}
</style>
