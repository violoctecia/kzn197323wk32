// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: [
        '@/assets/style/main.css'
    ],
    ssr: true,
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            link: [{rel: "icon", type: "image/png", href: "/favicon.png"}],
        }
    }

});
