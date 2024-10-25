<script setup>
const blockData = [
    {
        title: 'Компьютеры',
        img: '/images/icons/tech/Group 11042.svg'
    },
    {
        title: 'Ноутбуки',
        img: '/images/icons/tech/laptop-svgrepo-com_svgrepo.com.svg'
    },
    {
        title: 'Смартфоны',
        img: '/images/icons/tech/mobile-svgrepo-com_svgrepo.com.svg'
    },
    {
        title: 'Игровые приставки',
        img: '/images/icons/tech/console-controller-svgrepo-com_svgrepo.com.svg'
    },
    {
        title: 'Видеокарты',
        img: '/images/icons/tech/processor-svgrepo-com_svgrepo.com.svg'
    },
    {
        title: 'Мониторы',
        img: '/images/icons/tech/pc-computer-display-desktop-lcd-monitor-svgrepo-com_svgrepo.com.svg'
    }
];

const techs = [
    'Apple', 'Iphone', 'iPad',
    'MacBook', 'Apple Watch', 'Samsung',
    'Телевизоры', 'Ноутбуки от 2016 года', 'ПК от 2015 года',
    'Sony PlayStation', 'Xbox', 'Nintendo Switch',
    'Видеокарты RTX', 'Видеокарты AMD', 'Steam Deck'
];

const goToForm = () => {
    const formElement = document.getElementById('form');
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <section>
        <div class="container">
            <h2>C какой техникой мы работаем</h2>
            <div class="blocks">
                <div class="block" v-for="i in blockData">
                    <img :src="i.img" alt=" " loading="lazy">
                    <p>{{ i.title }}</p>
                </div>
            </div>

            <h3>Мы производим ремонт и выкупаем следующие устройства</h3>
            <ul>
                <li v-for="i in techs" :key="i">{{ i }}</li>
            </ul>
            <button class="button" @click="goToForm">Оставить заявку</button>
        </div>
    </section>
</template>

<style scoped>
section {
    background: var(--background);
    padding: 65px 0;
}
h3 {
    font-weight: 500;
    font-size: 18px;
    color: var(--dark-blue);
    margin-bottom: 15px;
    text-align: start;
    width: 100%;
}
ul {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    margin-bottom: 35px;
    li {
        border-radius: 13px;
        padding: 8px 30px;
        min-width: 92px;
        background: var(--white);
        font-family: var(--second-family), sans-serif;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: var(--dark-blue);
    }
}
.blocks {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 5px;
    margin-bottom: 55px;

    .block {
        width: 170px;
        height: 170px;
        border-radius: 13px;
        padding: 25px 15px;
        background: var(--white);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        img {
            height: 60px;
            width: 60px;
        }

        p {
            font-family: var(--second-family), sans-serif;
            font-weight: 500;
            font-size: 16px;
            text-align: center;
            color: var(--dark-blue);
        }
    }
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    text-align: center;
    font-weight: 500;
    font-size: 32px;
    color: var(--dark-blue);
    margin-bottom: 35px;
}


@media (max-width: 900px) {
    section {
        padding: 45px 0;
    }
    h3 {
        text-align: center;
        margin-bottom: 25px;
    }
    ul {
        display: flex;
        gap: 5px 10px;
       li {
           min-width: 60px;
           padding: 8px 20px;
       }
    }
    .blocks {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 35px;

        .block {
            width: calc(50% - 5px);
        }
    }

    h2 {
        font-size: 24px;
        margin-bottom: 35px;
    }


}
</style>