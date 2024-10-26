export default defineNuxtRouteMiddleware(async (to) => {
    const url = to.path;

    if (url === '/') {
        useHead({
            title: 'Скупка техники в Казани - Выгодные условия продажи',
            meta: [
                {
                    name: 'description',
                    content: 'Скупка техники в Казани: быстрая оценка, моментальная оплата, лучшие цены. Продавайте свою технику на выгодных условиях.'
                },
                {
                    name: 'language',
                    content: 'ru-RU'
                },
                {
                    name: 'robots',
                    content: 'noindex, nofollow'
                },
                {
                    property: 'og:image',
                    content: '/favicon.png'
                },
                {
                    property: 'og:title',
                    content: 'Скупка техники в Казани - Лучшие условия для продажи'
                },
                {
                    property: 'og:description',
                    content: 'Продавайте технику в Казани на выгодных условиях. Быстрая оценка и моментальная оплата.'
                },
                // {
                //     property: 'og:url',
                //     content: 'https://kktd-helper.ru/'
                // },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:site_name',
                    content: 'Скупка техники в Казани - Лучшие условия для продажи'
                },
            ]
        });
    } else {
        useHead({
            title: 'Документы - Скупка техники в Казани',
            meta: [
                {
                    name: 'language',
                    content: 'ru-RU'
                },
                {
                    name: 'robots',
                    content: 'noindex, nofollow'
                },
                {
                    property: 'og:image',
                    content: '/favicon.png'
                },
                {
                    property: 'og:title',
                    content: 'Документы - Скупка техники в Казани'
                },
                {
                    property: 'og:description',
                    content: 'Продавайте технику в Казани на выгодных условиях. Быстрая оценка и моментальная оплата.'
                },
                // {
                //     property: 'og:url',
                //     content: 'https://kktd-helper.ru/'
                // },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:site_name',
                    content: 'Документы - Скупка техники в Казани'
                },
            ]
        });
    }
});
