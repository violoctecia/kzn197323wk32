<script setup>
const blockData = [
    {
        title: 'Честная оценка и выкуп техники',
        subtitle: 'Оцениваем вашу технику до 80% рыночной стоимости. Гарантируем прозрачные условия и мгновенные выплаты.',
        img: '/images/icons/Group 3138.svg'
    },
    {
        title: 'Экономим ваше время',
        subtitle: 'Проводим диагностику при вас до 17 минут. Этого хватит, чтобы выпить чашечку чая или кофе у нас в офисе.',
        img: '/images/icons/clock 1.svg'
    },
    {
        title: 'Бесплатная оценка',
        subtitle: 'Предлагаем бесплатную первичную оценку вашей техники.',
        img: '/images/icons/Group 3136.svg'
    },
    {
        title: 'Курьер поможет вам с доставкой',
        subtitle: 'При продаже сразу нескольких единиц техники, ее заберет курьер в удобное для вас время.',
        img: '/images/icons/Group 3139.svg'
    }
];
</script>

<template>
    <section>
        <div class="container">
            <div class="head">
                <h2>Почему стоит обратиться к нам?</h2>
                <p>Главное преимущество деньги сразу по сравнению с площадками продажи б/у товаров, не заманиваем
                    высокой оценкой, даем предварительную оценку.</p>
            </div>
            <div class="blocks">
                <div class="block" v-for="i in blockData">
                    <img :src="i.img" alt=" " loading="lazy">
                    <h3>{{ i.title }}</h3>
                    <p>{{ i.subtitle }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background: var(--background);
    padding: 65px 0;
}

.blocks {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    max-width: 920px;

    .block {
        border-radius: 13px;
        background: var(--white);
        max-width: calc(50% - 15px);
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: start;

        img {
            height: 40px;
            margin-bottom: 22px;
        }

        h3 {
            margin-bottom: 15px;
            font-weight: 700;
            font-size: 20px;
            color: var(--dark-blue);
        }

        p {
            font-family: var(--second-family), sans-serif;
            font-weight: 400;
            font-size: 15px;
            color: var(--gray);
        }
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.head {
    max-width: 920px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 45px;

    h2 {
        text-align: center;
        font-weight: 500;
        font-size: 32px;
        color: var(--dark-blue);
    }

    p {
        text-align: center;
        font-family: var(--second-family), sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: var(--gray);
    }
}

@media (max-width: 900px) {
    section {
        padding: 45px 0;
    }

    .blocks {
        flex-direction: column;
        gap: 15px;
        max-width: none;

        .block {
            max-width: 100%;
            h3 {
                font-weight: 500;
            }
        }
    }

    .head {
        max-width: none;
        gap: 15px;
        margin-bottom: 35px;

        h2 {
            font-size: 24px;
        }
    }
}
</style>