<script setup>

</script>

<template>
    <section>
        <div class="container">
            <div class="content">
                <div class="text">
                    <h1>Скупка электроники<br>
                        в Казани, оценка Online</h1>
                    <p>Узнать цену устройства сейчас</p>
                </div>
                <button class="button">Оставить заявку</button>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background: var(--dark-blue);
    .container {
        background-image: url("/images/Frame4138.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: right bottom;
    }
    .content {
        padding: 100px 0;
        max-width: 563px;
        display: flex;
        flex-direction: column;
        gap: 30px;

        .text {
            display: flex;
            flex-direction: column;
            gap: 15px;

            h1 {
                font-weight: 500;
                font-size: 48px;
                line-height: 95%;
                color: var(--white);
            }

            p {
                font-family: var(--second-family), sans-serif;
                font-weight: 400;
                font-size: 18px;
                color: var(--white-50);
            }
        }
    }
}
@media (max-width: 1000px) {
    section {
        .content {
            padding: 65px 0;
        }
    }
}
@media (max-width: 900px) {
    section {
        .container {
            background-size: 350px;
            background-position: center bottom 100px;
        }
        .content {
            padding: 45px 0;
            max-width: none;
            align-items: center;
            gap: 280px;

            .text {

                h1 {
                    font-size: 36px;
                    text-align: center;
                }

                p {
                    font-size: 18px;
                    text-align: center;
                }
            }
        }
    }
}
</style>