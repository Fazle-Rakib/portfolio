<template>
  <div class="ongoing-research-item">
    <h3 class="research-title">{{ title }}</h3>
    <p class="research-period">
      <em>{{ period }}</em>
    </p>

    <div class="research-details">
      <p class="research-description">{{ description }}</p>

      <div class="research-links">
        <div class="research-tags">
          <span v-for="tag in tags" :key="tag" class="research-tag">
            {{ tag }}
          </span>
        </div>

        <div class="research-status">
          <span class="status-indicator" :class="status">
            {{ statusText }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  status: {
    type: String,
    required: true,
    validator: (value) => ['active', 'planning', 'completed'].includes(value)
  },
  statusText: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.ongoing-research-item {
  background: var(--color-gray-50);
  border-radius: var(--radius-default);
  padding: 1.5rem;
  border: 1px solid var(--color-gray-200);
  border-left: 4px solid var(--color-primary);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.ongoing-research-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary);
}

.research-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-gray-800);
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.research-period {
  font-size: var(--text-lg);
  font-weight: 400;
  color: inherit;
  margin: 0 0 0.75rem 0;
  opacity: 0.8;
  line-height: 1.6;
}

.research-description {
  font-size: var(--text-lg);
  color: var(--color-gray-600);
  line-height: 1.6;
  margin: 0 0 1rem 0;
  text-align: justify;
  opacity: 0.8;
}

.research-links {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
}

.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex: 1;
}

.research-tag {
  font-size: var(--text-sm);
  background: var(--color-primary-lighter, rgba(26, 188, 209, 0.1));
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-default);
  font-weight: 500;
}

.research-status {
  display: flex;
  align-items: center;
}

.status-indicator {
  font-size: var(--text-sm);
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-default);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-indicator.active {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

.status-indicator.planning {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

.status-indicator.completed {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
}

/* Dark theme support */
body[data-theme='dark'] .ongoing-research-item {
  background: var(--color-gray-800);
  border-color: var(--color-gray-700);
}

body[data-theme='dark'] .ongoing-research-item:hover {
  border-color: var(--color-primary);
}

body[data-theme='dark'] .research-title {
  color: var(--color-default-white);
}

body[data-theme='dark'] .research-description {
  color: var(--color-gray-300);
}

/* Responsive design */
@media screen and (max-width: 768px) {
  .ongoing-research-item {
    padding: 1.25rem;
  }

  .research-title {
    font-size: var(--text-base);
  }

  .research-period,
  .research-description {
    font-size: var(--text-base);
  }

  .research-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .research-status {
    align-self: flex-start;
  }
}

@media screen and (max-width: 480px) {
  .research-title {
    font-size: var(--text-base);
  }

  .research-period,
  .research-description {
    font-size: var(--text-sm);
  }

  .research-tags {
    gap: 0.375rem;
  }

  .research-tag {
    font-size: var(--text-xs);
    padding: 0.2rem 0.5rem;
  }
}
</style>
