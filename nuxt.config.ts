// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/style/main.css'
  ],
  app: {
    baseURL: '/kzn197323wk32/', // Путь к вашему репозиторию, если не используете кастомный домен
  },
  ssr: true,
})
