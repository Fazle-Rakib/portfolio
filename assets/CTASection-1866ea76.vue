<template>
  <div class="cta-section">
    <div class="cta-content">
      <h3 class="cta-title">
        <font-awesome-icon icon="fa fa-handshake" />
        Let's collaborate!
      </h3>
      <p class="cta-description">
        I'm always open to discussing research opportunities, academic partnerships,
        or innovative projects that can make a meaningful impact.
      </p>

      <div class="cta-actions">
        <a href="mailto:rakib-iict@sust.edu" class="cta-link email-link" aria-label="Send me an email">
          <font-awesome-icon icon="fa fa-envelope" />
          <span>Send Email</span>
        </a>

        <a href="https://linkedin.com/in/fazle-rakib" target="_blank" rel="noopener noreferrer"
          class="cta-link linkedin-link" aria-label="Connect on LinkedIn">
          <font-awesome-icon icon="fa fa-linkedin" />
          <span>LinkedIn DM</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
.cta-section {
  background-color: var(--accent-color-lighter, var(--color-gray-50));
  border: 1px solid var(--color-gray-200);
  border-left: 4px solid var(--color-primary);
  color: var(--color-gray-800);
  padding: 2.5rem;
  border-radius: var(--radius-default);
  text-align: center;
  margin-top: 3rem;
  box-shadow: var(--elevation-1);
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-gray-800);
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  svg {
    font-size: var(--text-lg);
    color: var(--color-primary);
  }
}

.cta-description {
  font-size: var(--text-lg);
  font-weight: 400;
  color: var(--color-gray-700);
  margin: 0 0 2rem 0;
  line-height: 1.6;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: transparent;
  border: 2px solid var(--color-gray-300);
  border-radius: var(--radius-default);
  color: var(--color-gray-700);
  text-decoration: none;
  font-weight: 600;
  font-size: var(--text-base);
  transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  outline: 0;

  svg {
    font-size: 1.125rem;
    transition: all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:hover {
    transform: translateY(-4px);
    border-color: var(--color-primary);
    color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    svg {
      color: var(--color-primary);
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--color-primary);
  }

  &:active {
    transform: translateY(-2px);
  }
}

/* Dark theme support */
body[data-theme='dark'] .cta-section {
  background-color: var(--color-gray-800);
  border-color: var(--color-gray-700);
  border-left: 4px solid var(--color-primary);
  color: var(--color-default-white);
  box-shadow: var(--elevation-2);
}

body[data-theme='dark'] .cta-title {
  color: var(--color-default-white);
}

body[data-theme='dark'] .cta-description {
  color: var(--color-gray-300);
}

body[data-theme='dark'] .cta-link {
  border-color: var(--color-gray-600);
  color: #F4F4F4;

  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
}

/* Mobile responsiveness */
@media screen and (max-width: 768px) {
  .cta-section {
    padding: 2rem 1.5rem;
    margin-top: 2rem;
  }

  .cta-title {
    font-size: var(--text-lg);

    svg {
      font-size: var(--text-base);
    }
  }

  .cta-description {
    font-size: var(--text-base);
    margin-bottom: 1.5rem;
  }

  .cta-actions {
    gap: 1rem;
  }

  .cta-link {
    padding: 0.625rem 1.25rem;
    font-size: var(--text-sm);

    svg {
      font-size: var(--text-xs);
    }
  }
}

@media screen and (max-width: 425px) {
  .cta-section {
    padding: 1.5rem 1rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .cta-link {
    min-width: 160px;
    justify-content: center;
  }
}
</style>
