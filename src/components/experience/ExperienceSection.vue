<template>
  <section id="experience" class="experience-section container">
    <h3>Experience</h3>

    <div class="experience-timeline">
      <!-- Industry -->
      <div class="experience-item">
        <div class="experience-icon industry">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zm8 16H4V8h16v12z"/>
          </svg>
        </div>
        <div class="experience-content">
          <div class="experience-header">
            <div class="experience-title-group">
              <h4 class="experience-role">Software Engineer</h4>
              <p class="experience-org">
                <a href="https://pathao.com" target="_blank" rel="noopener noreferrer">Pathao Limited</a>
                — Bangladesh's leading digital services platform
              </p>
            </div>
            <span class="experience-period">2 years</span>
          </div>
          <ul class="experience-list">
            <li>Developed and maintained multiple web portals and internal dashboards</li>
            <li>Specialized in frontend development using modern technologies</li>
            <li>Collaborated on scalable solutions serving millions of users</li>
            <li>Gained expertise in HTML5, CSS3, JavaScript (ES6+), and Vue.js</li>
          </ul>
        </div>
      </div>

      <!-- Academia -->
      <div class="experience-item">
        <div class="experience-icon academia">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l11 6 9-4.91V17H23V9L12 3zM5 13.18v4C5 19.46 8.33 21 12 21s7-1.54 7-3.82v-4L12 17l-7-3.82z"/>
          </svg>
        </div>
        <div class="experience-content">
          <div class="experience-header">
            <div class="experience-title-group">
              <h4 class="experience-role">Lecturer</h4>
              <p class="experience-org">
                Institute of Information and Communication Technology (IICT),
                <a href="https://sust.edu" target="_blank" rel="noopener noreferrer">Shahjalal University of Science &
                  Technology</a>
              </p>
            </div>
            <span class="experience-period">Present</span>
          </div>
          <p class="experience-description">
            Teaching core undergraduate courses while conducting research in AI, NLP, LLM and software engineering.
          </p>
          <div class="courses-block">
            <h5>Courses Taught</h5>
            <ul class="course-grid">
              <li>Software Requirement Engineering</li>
              <li>Object-Oriented Programming</li>
              <li>Web Technologies</li>
              <li>Software Usability and Metrics</li>
              <li>Software Verification and Validation</li>
              <li>Digital Image Processing</li>
              <li>Information and Network Security</li>
              <li>Computer Graphics and Image Processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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

.experience-description {
  font-size: var(--text-base);
  opacity: 0.8;
  line-height: 1.6;
  margin: 0 0 0.75rem 0;
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
