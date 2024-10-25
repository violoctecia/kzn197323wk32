<script setup>
import Doc2 from '~/components/doc2.vue';
</script>

<template>
    <div>
        <section class="page-links">
            <div class="container">
                <div class="links">
                    <nuxt-link to="/">Главная</nuxt-link>
                    <nuxt-link to="/personal-data-processing-policy/">Политика обработки персональных данных</nuxt-link>
                </div>
            </div>
        </section>
        <doc2 />
    </div>
</template>

<style scoped>
.page-links {
    padding: 20px 0;
    background: var(--background);
    .links {
        display: flex;
        flex-wrap: wrap;
        max-width: 90%;
        a {
            color: var(--gray-50);
            font-family: var(--second-family), sans-serif;
            font-weight: 400;
            font-size: 14px;
            position: relative;
            padding-right: 30px;
        }
        a:last-child {
            padding-right: 0;
        }
        a:not(:last-child)::before {
            content: "";
            position: absolute;
            top: 52%;
            right: 5px;
            transform: translateY(-50%);
            width: 24px;
            height: 24px;
            background-image: url("/images/icons/chevron-down.svg");
            background-size: contain;
            background-repeat: no-repeat;
        }
        a:hover {
            color: var(--orang);
        }
    }
}
</style>