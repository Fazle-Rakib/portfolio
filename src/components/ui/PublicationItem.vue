<template>
  <div class="publication-item">
    <h3 class="publication-title">{{ title }}</h3>
    <p class="publication-authors" v-html="authors"></p>
    <p class="publication-venue">
      <em>{{ venue }}</em>
    </p>

    <div class="publication-links">
      <template v-for="link in links" :key="link.type">
        <a :href="link.url" :target="link.url.startsWith('http') ? '_blank' : '_self'"
          :rel="link.url.startsWith('http') ? 'noopener noreferrer' : ''" class="pub-link" :class="`${link.type}-link`"
          :aria-label="link.label">
          <font-awesome-icon :icon="getIcon(link.type)" />
          <span>{{ link.label }}</span>
        </a>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  links: {
    type: Array,
    required: true,
    validator: (links) => {
      return links.every(link =>
        link.type && link.url && link.label
      )
    }
  }
})

// Icon mapping function
const getIcon = (type) => {
  const iconMap = {
    blog: 'fa fa-file-alt',
    project: 'fa fa-globe',
    paper: 'fa fa-file-alt',
    github: 'fab fa-github',
    dataset: 'fa fa-database',
    kaggle: 'fab fa-kaggle'
  }
  return iconMap[type] || 'fa fa-link'
}
</script>

<style lang="css" scoped>
.publication-item {
  background-color: var(--accent-color-lighter, var(--color-gray-50));
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-default);
  padding: 2rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--color-primary);

  .publication-title {
    font-size: var(--text-lg);
    font-weight: 700;
    color: var(--color-gray-800);
    margin: 0 0 0.75rem 0;
    line-height: 1.4;
  }

  .publication-authors {
    font-size: var(--text-base);
    color: var(--color-gray-700);
    margin: 0 0 0.5rem 0;

    :deep(strong) {
      color: var(--color-primary);
      font-weight: 600;
    }
  }

  .publication-venue {
    font-size: var(--text-sm);
    color: var(--color-gray-600);
    margin: 0 0 1.5rem 0;

    em {
      font-style: italic;
      font-weight: 500;
    }
  }

  .publication-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .pub-link {
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

    svg {
      font-size: 1.25rem;
      transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    span {
      font-size: var(--text-xs);
      text-align: center;
      line-height: 1.2;
      transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    &:hover {
      transform: translateY(-4px);

      svg,
      span {
        color: var(--color-primary);
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px var(--color-primary);
    }
  }
}

/* Dark theme support */
body[data-theme='dark'] .publication-item {
  background-color: var(--color-gray-800);
  border-color: var(--color-gray-700);
  border-left: 4px solid var(--color-primary);

  .publication-title {
    color: var(--color-default-white);
  }

  .publication-authors {
    color: var(--color-gray-300);
  }

  .publication-venue {
    color: var(--color-gray-400);
  }
}

/* Light theme support */
body[data-theme='light'] .publication-item {
  .pub-link {
    svg {
      color: var(--color-default-black);
    }

    span {
      color: var(--color-default-black);
    }
  }
}

/* Mobile responsiveness */
@media screen and (max-width: 768px) {
  .publication-item {
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    .publication-title {
      font-size: var(--text-base);
    }

    .publication-authors {
      font-size: var(--text-sm);
    }

    .publication-venue {
      font-size: var(--text-xs);
    }

    .publication-links {
      gap: 0.5rem;
    }

    .pub-link {
      padding: 0.5rem 0.375rem;
      min-width: 3rem;
      font-size: var(--text-xs);

      svg {
        font-size: 1rem;
      }

      span {
        font-size: 0.6rem;
      }
    }
  }
}
</style>
