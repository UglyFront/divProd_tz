<template>
    <div class="progress">
        <div class="progress__item">
            <div class="progress__item-line progress__item-line_min"></div>
        </div>

        <div class="progress__item">
            <div class="progress__item-line"></div>
        </div>

        <div class="progress__item progress__item_active">
            <span class="progress__item-number">03</span>
            <span class="progress__item-text">Подсказки</span>
            <div class="progress__item-line"></div>
        </div>

        <div class="progress__item">
            <div class="progress__item-line"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SidebarProgress"
}
</script>

<style scoped lang="scss">
    .progress {
        width: 152px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
 

        &__item {
            width: 116px;
            height: 26px;
            position: relative;

            .progress__item-line {
                position: absolute;
                bottom: 0;
                width: 10px;
                height: 2px;
                background: #000;

                &_min {
                    width: 4px;
                }
            }

            .progress__item-number {
                font-family: "kinopoisk-semibold";
                font-size: 18px;
            }

            .progress__item-text {
                font-family: "kinopoisk-regular";
                font-size: 16px;
                margin-left: 10px;
            }

            &_active {
                .progress__item-line {
                    width: 100%;
                    height: 2px;
                }
            }
        }
    }


    @media screen and (max-width: 1000px) {
        .progress {
            display: none;
        }
    }
</style>
