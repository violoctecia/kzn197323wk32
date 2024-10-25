<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
    <MainHeader />
    <section>
        <div class="container">
            <div class="message">
                <div class="img">
                    <img src="/images/icons/404.svg" alt=" " loading="lazy">
                </div>
                <p>Похоже, страница спряталась с чашечкой кофе. Возможно, стоит поискать её позже или перейти на
                    главную.</p>
            </div>
            <nuxt-link class="button" to="/" @click="handleError">Вернуться на главную</nuxt-link>
        </div>
    </section>
</template>

<style scoped>
section {
    height: calc(100vh - 60px);
    background: var(--dark-blue);


    .container {
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        .message {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 25px;
            max-width: 350px;
            .img {
                width: 149px;
                height: 62px;
                img {
                    width: 100%;
                }
            }
            p {
                color: var(--gray-50);
                font-weight: 400;
                font-size: 14px;
                line-height: 95%;
                text-align: center;
            }
        }
        .button {
            width: fit-content;
        }
    }
}
@media (max-height: 400px) {
    section {
        min-height: 450px;
        background: var(--dark-blue);
    }
}
</style>