<script setup>
const activeIndex = ref(null);
const refs = ref([]);

const toggle = (key) => {
    activeIndex.value = activeIndex.value === key ? null : key;
};

watch(activeIndex, async () => {
    await nextTick();
    refs.value.forEach((refElement, index) => {
        if (refElement) {
            refElement.style.maxHeight = activeIndex.value === index ? `${refElement.scrollHeight}px` : null;
        }
    });
});
const faq = [
    {
        title: "У меня есть несколько девайсов фирмы Apple. Можно ли вам сдать их?",
        answer: "Конечно, мы принимаем: Макбуки, айфоны, айпады, аймаки и другую технику Apple."
    },
    {
        title: "Хочу быстро и без проблем продать технику. На сколько быстро это можно сделать?",
        answer: "На тестирование и выкуп уходит не более 17 минут."
    },
    {
        title: "Выкупаете технику в любом состоянии, даже в нерабочем?",
        answer: "Да, мы покупаем только рабочую электронику, в зависимости от состояния."
    }
]
</script>

<template>
    <section>
        <div class="container">
            <h2>Вопросы и ответы</h2>
            <div class="accordions">
                <div class="accordion-item" v-for="(i, key) in faq" :key="key"
                     :class="{ active: activeIndex === key }">
                    <div class="accordion-button">
                        <button @click="toggle(key)">
                            <span>{{ i.title }}</span>
                            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1.36858C1 1.06044 1.37871 0.913133 1.58692 1.14028L6.5 6.5L11.4131 1.14028C11.6213 0.913133 12 1.06044 12 1.36858C12 1.45311 11.9683 1.53457 11.9112 1.59688L7.23715 6.69583C6.84082 7.1282 6.15918 7.1282 5.76285 6.69583L1.08881 1.59688C1.03169 1.53457 1 1.45311 1 1.36858Z" fill="var(--dark-blue)" stroke="var(--dark-blue)"/>
                            </svg>
                        </button>
                    </div>
                    <div :ref="el => (refs[key] = el)" class="text">
                        <p>{{ i.answer }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 65px 0;
}

h2 {
    text-align: center;
    font-weight: 500;
    font-size: 32px;
    color: var(--dark-blue);
    margin-bottom: 35px;
}

.accordion-item.active {
    background: var(--orang);
    padding-bottom: 20px;



    .accordion-button {
        button {
            svg {
                transform: rotate(180deg);
                path {
                    stroke: var(--white) !important;
                }
            }

            span {
                color: var(--white);
            }
        }


    }
}

.accordion-item {
    width: 100%;
    padding: 0 35px;
    border-radius: 13px;

    .text {
        max-height: 0;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 10px;
        p {
            font-family: var(--second-family), sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 157%;
            color: var(--white);
        }
    }

    .accordion-button {
        button {
            cursor: pointer;
            padding: 20px 0;
            background: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            span {
                font-family: var(--second-family), sans-serif;
                text-align: start;
                font-weight: 500;
                font-size: 16px;
                color: var(--dark-blue);
            }
        }
    }

}

@media (max-width: 900px) {
    section {
        padding: 45px 0;
    }


    h2 {
        font-size: 24px;
    }

    .accordion-item.active {
        padding-bottom: 15px;
    }

    .container {
        padding: 0;
    }

    .accordion-item {
        width: 100%;
        padding: 0 20px;

        .text {
            max-height: 0;
        }

        .accordion-button {
            button {
                padding: 15px 0;
                span {
                    max-width: 90%;
                }
            }
        }

    }
}
</style>