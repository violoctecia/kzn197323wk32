<script setup>

</script>

<template>
    <section>
        <div class="container">
            <div class="head">
                <h2>Наши отзывы</h2>
                <p>Читайте что про нас пишут на Яндекс картах</p>
            </div>
            <div class="reviews">
                <iframe style="width:100%;height:100%;border-radius:13px;box-sizing:border-box"
                        src="https://yandex.ru/maps-reviews-widget/117908745990?comments" />
                <a href="https://yandex.ru/maps/org/kupi_proday/117908745990/" target="_blank"
                   style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box">Купи-Продай
                    на карте Казани — Яндекс Карты
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    background: var(--background);
    padding: 65px 0;
}

.reviews {
    max-width: 560px;
    width: 100%;
    height: 800px;;
    overflow: hidden;
    position: relative;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.head {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;

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

    .head {
        h2 {
            font-size: 24px;
        }


    }
}
</style>