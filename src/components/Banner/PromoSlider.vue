<template>
    <div class="slider">
        <div class="slider__counter">
            {{activeSlide + 1}}/{{$store.state.items.length}} 
        </div>
        <div class="slider__wrapper">
            <div 
                class="slider__controlls slider__controlls_prev"
                @click="$store.commit('minusActiveSlide')"
            >
                <img src="../../assets/img/arrow-slider.png" alt="">
            </div>
            <div 
                class="slider__controlls"
                @click="$store.commit('plusActiveSlide')"
            >
                <img src="../../assets/img/arrow-slider.png" alt="">
            </div>
            <div class="slider__wrapper__slide slide">
                <img class = "cloud-down" src="../../assets/img/cloud-down.png" alt="">
                <img class="slide__img" src="../../assets/img/person.png" alt="">
                <p class="slide__text">{{$store.state.items[activeSlide].text}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PromoSlider",

    computed: {
        activeSlide() {
            return this.$store.state.activeSlide
        }
    }
}
</script>

<style lang="scss">
.slider {
    max-width: 800px;
    width: 100%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 40px;
    z-index: 1;

    &__counter {
        width: 55px;
        height: 55px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        font-family: "kinopoisk-semibold";
        z-index: 100;
    }

    &__wrapper {
        width: 100%;
        height: 50vh;

        position: relative;

        .slide {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            


            .cloud-down {
                position: absolute;
                bottom: 10px;
                left: -150px;
                z-index: 2;
            }

            &__img {
                position: relative;
                top: 34px;
                z-index: 1;
            }
            
            &__text {
                position: absolute;
                bottom: -20px;
                height: 100px;
                width: 100%;
                font-size: 20px;
                line-height: 32px;
                text-align: center;
                font-family: 'kinopoisk-light';
                background: #fff;
                z-index: 100;
                letter-spacing: .4px;
            }
        }
    }

    .slider__controlls {
        width: 40px;
        height: 40px;
        position: absolute;
        top: calc(50% - 20px);
        right: 0;
        cursor: pointer;
        z-index: 200;

        &_prev {
            z-index: 200;
            left: 0;
            transform: rotate(180deg);
        }
    }
}


@media screen and (max-height: 700px) {
    .slide__img {
        height: 300px;
    }
}
</style>