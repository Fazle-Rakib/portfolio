<template>
  <div class="cta-section">
    <div class="cta-content">
      <h3 class="cta-title">
        <font-awesome-icon icon="fa fa-handshake" />
        Let's connect!
      </h3>
      <p class="cta-description">
        I'm always open to discussing research opportunities, academic partnerships, or innovative projects that can
        make a meaningful impact.
      </p>
      <div class="cta-email-container">
        <button @click="copyEmail" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
          class="cta-email-button" :class="{ 'copied': showCopied }" aria-label="Copy email address"
          title="Copy email address">
          <font-awesome-icon :icon="showCopied ? 'fa fa-check' : 'fa fa-copy'" />
          <span class="email-text">rakib-iict@sust.edu</span>
        </button>
        <div class="email-tooltip" :class="{ 'show': showTooltip, 'copied': showCopied }">
          {{ showCopied ? 'Copied!' : 'Click to copy' }}
        </div>
      </div>

      <div class="cta-actions">
        <AppLink to="/about-me" class="cta-link about-link" aria-label="Learn more about me">
          <font-awesome-icon icon="fa fa-user" />
          <span>Learn More About Me</span>
        </AppLink>

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
import { ref } from 'vue'

// Email copy functionality
const showTooltip = ref(false)
const showCopied = ref(false)
const emailAddress = 'rakib-iict@sust.edu'

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(emailAddress)
    showCopied.value = true
    showTooltip.value = true

    // Reset after 2 seconds
    setTimeout(() => {
      showCopied.value = false
      showTooltip.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy email: ', err)
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = emailAddress
    document.body.appendChild(textArea)
    textArea.select()
    try {
      document.execCommand('copy')
      showCopied.value = true
      showTooltip.value = true
      setTimeout(() => {
        showCopied.value = false
        showTooltip.value = false
      }, 2000)
    } catch (fallbackErr) {
      console.error('Fallback copy failed: ', fallbackErr)
    }
    document.body.removeChild(textArea)
  }
}
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
  margin-top: 2rem;
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
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.cta-email-container {
  position: relative;
  display: inline-block;
  margin: 0 0 2rem 0;
}

.cta-email-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  border-radius: var(--radius-default);
  color: #F4F4F4;
  font-family: var(--font-mono);
  font-size: var(--text-base);
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 400ms cubic-bezier(0.22, 0.61, 0.36, 1);
  outline: none;
}

.cta-email-button:hover {
  transform: translateY(-4px);
}

.cta-email-button:hover,
.cta-email-button:hover svg {
  color: var(--color-primary);
}

.cta-email-button.copied,
.cta-email-button.copied svg {
  color: var(--color-primary);
}

.cta-email-button svg {
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.email-text {
  user-select: none;
}

.email-tooltip {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-gray-800);
  color: var(--color-default-white);
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-default);
  font-size: var(--text-sm);
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 10;
}

.email-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: var(--color-gray-800);
}

.email-tooltip.show {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-2px);
}

.email-tooltip.copied {
  background: var(--color-primary);
}

.email-tooltip.copied::after {
  border-top-color: var(--color-primary);
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

/* Light theme support */
body[data-theme='light'] .cta-email-button {
  color: var(--color-default-black);
}

body[data-theme='light'] .cta-email-button svg {
  color: var(--color-default-black);
}

body[data-theme='light'] .cta-email-button:hover,
body[data-theme='light'] .cta-email-button:hover svg {
  color: var(--color-primary);
}

body[data-theme='dark'] .email-tooltip {
  background: var(--color-gray-700);
}

body[data-theme='dark'] .email-tooltip::after {
  border-top-color: var(--color-gray-700);
}

body[data-theme='dark'] .email-tooltip.copied {
  background: var(--color-primary);
}

body[data-theme='dark'] .email-tooltip.copied::after {
  border-top-color: var(--color-primary);
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
    margin-top: 1rem;
  }

  .cta-title {
    font-size: var(--text-lg);

    svg {
      font-size: var(--text-base);
    }
  }

  .cta-description {
    font-size: var(--text-base);
    margin-bottom: 1rem;
  }

  .cta-email-button {
    font-size: var(--text-sm);
    padding: 0.375rem 0.625rem;
  }

  .cta-email-container {
    margin-bottom: 1.5rem;
  }

  .email-tooltip {
    font-size: var(--text-xs);
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
