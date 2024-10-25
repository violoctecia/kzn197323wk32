<script setup>

</script>

<template>
    <footer>
        <div class="container">
            <p>Торговые марки Apple, iPhone, iPod, iPad, Mac, iMac, iTunes, MacBook, iOS, Mac OS, Apple Watch является
                зарегистрированным товарными знаками компании Apple Inc. Обозначение используется не с целью
                индивидуализации соответствующих услуг по ремонту, а с целью информирования потребителей о
                предоставляемых услугах в отношении техники правообладателя.</p>
            <div class="docs">
                <nuxt-link to="/confidentiality-agreement/">Соглашение о конфиденциальности</nuxt-link>
                <nuxt-link to="/personal-data-processing-policy/">Политика обработки персональных данных</nuxt-link>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: var(--background);
    padding: 55px 0;
    .container {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
}
p {
    width: calc(50% - 15px);
    font-weight: 400;
    font-size: 12px;
    color: var(--gray-50);
    font-family: var(--second-family), sans-serif;
}
.docs {
    font-family: var(--second-family), sans-serif;
    width: calc(50% - 15px);
    display: flex;
    gap: 30px;
    justify-content: center;
    a {
        color: var(--gray-50);
        font-weight: 400;
        font-size: 12px;
    }
    a:hover {
        color: var(--gray);
    }
}
@media (max-width: 900px) {
    footer {
        padding: 45px 0;
        .container {
            flex-direction: column;
            justify-content: start;
            gap: 35px;
        }
    }
    p {
        width: 100%;
    }
    .docs {
        width: 100%;
        flex-direction: column;
        gap: 15px;
        justify-content: center;
    }
}
</style>