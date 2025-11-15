import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

import '@/assets/styles/index.css'
import '@/assets/styles/reset.css'
import '@/assets/styles/global.css'
import '@/assets/styles/markdown.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL || '/portfolio/',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
          top: 80, // Account for sticky navbar height
        }
      } else {
        return { top: 0 }
      }
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob('./modules/*.js', { eager: true })).forEach(
      (i) => i.install?.(ctx)
    )
  }
)
