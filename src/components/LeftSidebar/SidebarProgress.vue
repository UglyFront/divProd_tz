<template>
    <div class="sidebar__progress">
        <div class="sidebar__progress__item">
            <div class="progress__item__line progress__item__line_min"></div>
        </div>

        <div class="sidebar__progress__item">
            <div class="progress__item__line"></div>
        </div>

        <div class="sidebar__progress__item sidebar__progress__item_active">
            <span class="progress__item__number">03</span>
            <span class="progress__item__text">Подсказки</span>
            <div class="progress__item__line"></div>
        </div>

        <div class="sidebar__progress__item">
            <div class="progress__item__line"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SidebarProgress"
}
</script>

<style scoped lang="scss">
    .sidebar__progress {
        width: 152px;
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
 

        &__item {
            width: 116px;
            height: 26px;
            position: relative;

            .progress__item__line {
                position: absolute;
                bottom: 0;
                width: 10px;
                height: 2px;
                background: #000;

                &_min {
                    width: 4px;
                }
            }

            .progress__item__number {
                font-family: "kinopoisk-semibold";
                font-size: 18px;
            }

            .progress__item__text {
                font-family: "kinopoisk-regular";
                font-size: 16px;
                margin-left: 10px;
            }

            &_active {
                .progress__item__line {
                    width: 100%;
                    height: 2px;
                }
            }
        }
    }


    @media screen and (max-width: 1000px) {
        .sidebar__progress {
            display: none;
        }
    }
</style>
