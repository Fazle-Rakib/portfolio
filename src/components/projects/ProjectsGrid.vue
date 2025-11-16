<template>
  <section class="projects-section container" id="projects">
    <h3>Projects</h3>

    <div class="projects-list">
      <div v-for="project in projectsData" :key="project.title" class="project-item">
        <h4 class="project-title">{{ project.title }}</h4>
        <p class="project-period"><em>{{ project.period }}</em></p>
        <p class="project-description">{{ project.description }}</p>

        <div class="project-tags">
          <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
        </div>

        <div class="project-links">
          <template v-for="link in project.links" :key="link.type">
            <a :href="link.url" :target="link.url.startsWith('http') ? '_blank' : '_self'"
              :rel="link.url.startsWith('http') ? 'noopener noreferrer' : ''" class="project-link"
              :class="`${link.type}-link`" :aria-label="link.label">
              <font-awesome-icon :icon="getIcon(link.type)" />
              <span>{{ link.label }}</span>
            </a>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projectsData = ref([
  {
    title: "Base64 Converter",
    period: "Nov 2022 – Dec 2022",
    description: "Created a web-based utility enabling users to encode or decode Base64 data. I implemented advanced features, including RSA key-pair generation (optional name/email/passphrase, 2048-/4096-bit), message-digest calculations across multiple hashing algorithms (MD4, MD5, SHA-256, SHA-512), and integrated built-in packages (bcrypt, cryptico, hash-wasm).",
    tags: ["VueJS", "Vue-Router", "Crypto Tools", "Base64", "RSA", "Message Digest"],
    links: [
      { url: 'https://github.com/Fazle-Rakib/b64-converter', type: 'github', label: 'Source Code' },
      { url: 'https://onlinekeygenerator.netlify.app/', type: 'demo', label: 'Live Demo' }
    ]
  }
])

// Icon mapping function (same as PublicationItem)
const getIcon = (type) => {
  const iconMap = {
    github: 'fab fa-github',
    demo: 'fa fa-external-link-alt',
    project: 'fa fa-globe',
    paper: 'fa fa-file-alt',
    dataset: 'fa fa-database'
  }
  return iconMap[type] || 'fa fa-link'
}
</script>

<style scoped>
.projects-section {
  margin-bottom: 2rem;
  flex: auto;
  flex-direction: column;
  scroll-margin-top: 80px;
}

.projects-section h3 {
  margin: 0 0;
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-gray-800);
  margin-bottom: 2rem;
}

/* Dark theme support */
body[data-theme='dark'] .projects-section h3 {
  color: var(--color-default-white);
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-item {
  background-color: var(--accent-color-lighter, var(--color-gray-50));
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-default);
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid var(--color-primary);
}

/* Dark theme support for project items */
body[data-theme='dark'] .project-item {
  background-color: var(--color-gray-800);
  border-color: var(--color-gray-700);
  border-left: 4px solid var(--color-primary);
}

.project-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-gray-800);
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

body[data-theme='dark'] .project-title {
  color: var(--color-default-white);
}

.project-period {
  font-size: var(--text-base);
  color: var(--color-gray-700);
  margin: 0 0 0.75rem 0;
  opacity: 0.8;
}

body[data-theme='dark'] .project-period {
  color: var(--color-gray-300);
}

.project-description {
  font-size: var(--text-base);
  color: var(--color-gray-600);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  text-align: justify;
}

body[data-theme='dark'] .project-description {
  color: var(--color-gray-300);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.project-tag {
  font-size: var(--text-sm);
  background: var(--color-primary-lighter, rgba(26, 188, 209, 0.1));
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-default);
  font-weight: 500;
}

.project-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.project-link {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  padding: 0.75rem 0.5rem;
  background: transparent;
  border: none;
  border-radius: var(--radius-default);
  color: #F4F4F4;
  text-decoration: none;
  font-size: var(--text-xs);
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  outline: 0;
  min-width: 4rem;
}

.project-link svg {
  font-size: 1.25rem;
  transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.project-link span {
  font-size: var(--text-xs);
  text-align: center;
  line-height: 1.2;
  transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.project-link:hover {
  transform: translateY(-4px);
}

.project-link:hover svg,
.project-link:hover span {
  color: var(--color-primary);
  fill: var(--color-primary);
}

.project-link:focus {
  box-shadow: 0 0 0 2px var(--color-primary);
}

/* Light theme support */
body[data-theme='light'] .project-link {
  color: var(--color-default-black);
}

body[data-theme='light'] .project-link svg {
  color: var(--color-default-black);
  fill: var(--color-default-black);
}

body[data-theme='light'] .project-link span {
  color: var(--color-default-black);
}

/* Responsive design */
@media screen and (max-width: 1024px) {
  .projects-section {
    padding-left: 18px;
    padding-right: 18px;
  }
}

@media screen and (max-width: 768px) {
  .projects-section h3 {
    font-size: var(--text-xl);
  }

  .project-item {
    padding: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .project-title {
    font-size: var(--text-base);
  }

  .project-period,
  .project-description {
    font-size: var(--text-sm);
  }
}

@media screen and (max-width: 480px) {
  .projects-section {
    padding-left: 12px;
    padding-right: 12px;
  }

  .projects-section h3 {
    font-size: var(--text-lg);
  }

  .projects-list {
    gap: 1rem;
  }

  .project-item {
    padding: 1.25rem;
    margin-bottom: 1rem;
  }

  .project-title {
    font-size: var(--text-base);
  }

  .project-period,
  .project-description {
    font-size: var(--text-sm);
  }

  .project-tags {
    gap: 0.375rem;
  }

  .project-tag {
    font-size: var(--text-xs);
    padding: 0.2rem 0.5rem;
  }

  .project-links {
    gap: 0.5rem;
  }

  .project-link {
    padding: 0.5rem 0.375rem;
    min-width: 3rem;
    font-size: var(--text-xs);
  }

  .project-link svg {
    font-size: 1rem;
  }

  .project-link span {
    font-size: 0.6rem;
  }
}
</style>
