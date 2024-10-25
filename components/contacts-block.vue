<script setup>

</script>

<template>
    <section>
        <div class="container">
            <div class="col">
                <h3>Мы на картах</h3>
                <iframe style="border-radius: 13px;"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab30b7f35766e49985f3ec251c549a1725b90fb2a311cbaea3b952d69bba3517e&amp;source=constructor"
                        width="100%" height="320" frameborder="0"></iframe>

            </div>
            <div class="col">
                <h3>Контакты</h3>
                <div class="block">
                    <p class="name">ООО “Название”</p>
                    <div class="row">
                        <p>Адрес</p>
                        <span>просп. Победы, 100, Казань</span>
                    </div>
                    <div class="row">
                        <p>График работы</p>
                        <span>Понедельник-воскресенье 10:00-20:00 МСК</span>
                    </div>
                    <div class="row">
                        <p>Почта</p>
                        <span>support@mail.ru</span>
                    </div>
                    <div class="row">
                        <p>Телефон</p>
                        <span>8 (903) 062-38-32</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 65px 0;
    background: var(--background);
}

.container {
    display: flex;
    justify-content: space-between;

    .col {
        width: calc(50% - 15px);
        height: 320px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        border-radius: 13px;
        overflow: hidden;

        h3 {
            font-weight: 500;
            font-size: 24px;
            color: var(--dark-blue);
        }

        .block {
            border-radius: 13px;
            padding: 30px;
            background: var(--white);
            display: flex;
            flex-direction: column;
            gap: 15px;

            p.name {
                font-family: var(--second-family), sans-serif;
                color: var(--gray);
                font-weight: 500;
                font-size: 12px;
            }

            .row {
                display: flex;
                width: 100%;
                justify-content: space-between;

                p {
                    font-family: var(--second-family), sans-serif;
                    text-align: start;
                    font-weight: 500;
                    font-size: 12px;
                    color: #000;
                }

                span {
                    font-family: var(--second-family), sans-serif;
                    max-width: 200px;
                    text-align: end;
                    font-weight: 400;
                    font-size: 12px;
                    color: var(--gray);
                }
            }
        }
    }
}

@media (max-width: 900px) {
    section {
        padding: 45px 0;
    }

    .container {
        justify-content: start;
        gap: 35px;
        flex-direction: column;

        .col {
            width: 100%;
        height: 100%;
            h3 {
                text-align: center;
            }

            .block {
                border-radius: 13px;
                padding: 25px;


                p.name {
                    font-family: var(--second-family), sans-serif;
                    color: var(--gray);
                    font-weight: 500;
                    font-size: 12px;
                }

                .row {
                    display: flex;
                    width: 100%;
                    justify-content: space-between;

                    p {
                        font-family: var(--second-family), sans-serif;
                        text-align: start;
                        font-weight: 500;
                        font-size: 12px;
                        color: #000;
                    }

                    span {
                        font-family: var(--second-family), sans-serif;
                        max-width: 200px;
                        text-align: end;
                        font-weight: 400;
                        font-size: 12px;
                        color: var(--gray);
                    }
                }
            }
        }
    }
}
</style>