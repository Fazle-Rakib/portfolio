<template>
  <div>
    <div class="hero-avatar">
      <picture class="hero-avatar__image">
        <slot />
      </picture>
    </div>
    <SocialMediaIcons :showDownloadCV="true" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
      default: "user's picture",
    },
  },
}
</script>

<style>
.hero-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 323px;
  height: 275px;
  background-color: var(--accent-color-lighter, var(--color-gray-800));
  border-radius: var(--radius-default);
  box-shadow: var(--elevation-2);
}

.hero-avatar .hero-avatar__image img {
  clip-path: circle(70px at center);
  object-fit: cover;
  /* transform: scale(2); */
}

.hero-avatar picture {
  position: relative;
}

.hero-avatar picture::before {
  --avatar-outline-color: var(--color-silver);

  content: '';
  position: absolute;
  display: block;
  width: 160px;
  height: 160px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
  outline: 8px inset var(--avatar-outline-color);
  border-radius: 9999px;
  animation: rotateOutline 20s linear infinite normal both;
  will-change: transform;
}

@keyframes rotateOutline {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

[data-theme='light'] .hero-avatar {
  box-shadow: var(--elevation-3);
}

[data-theme='light'] .hero-avatar picture::before {
  --avatar-outline-color: var(--color-primary);
}

@media screen and (max-width: 1024px) {
  .hero-avatar {
    width: 260px;
    height: 220px;
  }

  .hero-avatar picture::before {
    width: 140px;
    height: 140px;
    outline-width: 6px;
  }

  .hero-avatar .hero-avatar__image img {
    clip-path: circle(60px at center);
  }
}

@media screen and (max-width: 768px) {
  .hero-avatar {
    width: 240px;
    height: 200px;
  }

  .hero-avatar picture::before {
    width: 120px;
    height: 120px;
    outline-width: 5px;
  }

  .hero-avatar .hero-avatar__image img {
    clip-path: circle(50px at center);
  }
}

@media screen and (max-width: 425px) {
  .hero-avatar {
    width: 200px;
    height: 170px;
  }

  .hero-avatar picture::before {
    width: 100px;
    height: 100px;
    outline-width: 4px;
  }

  .hero-avatar .hero-avatar__image img {
    clip-path: circle(40px at center);
  }
}
</style>
