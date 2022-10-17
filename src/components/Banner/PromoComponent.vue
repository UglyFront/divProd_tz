<template>
    <div class="promo">
        <div class="promo__text">ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ</div>
        <PromoSlider/>
        <div class="promo__button">
            <a href="#">Искать промокод</a>
            <svg width="28" height="5" viewBox="0 0 28 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.370911 2.8553L26.7406 2.8553" stroke="#333333"/>
                <path d="M25.0246 4.54921L26.7453 2.8285L25.0246 1.13766" stroke="#333333"/>
            </svg>
        </div>
    </div>
</template>

<script>
import PromoSlider from "./PromoSlider.vue"

export default {
    name: "PromoComponent",
    components: {
        PromoSlider
    }
}
</script>

<style scoped lang="scss">
.promo {
    width: 100vw;
    height: 70vh;
   

    &__text {
        font-family: 'futura-bold';
        margin-top: 30px;
        text-align: center;
        font-size: 45px;
        color: #FFCC64;
    }

    &__button {
        width: 205px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-family: 'kinopoisk-regular';

        a {
            color: #000
        }
    }
}
</style>