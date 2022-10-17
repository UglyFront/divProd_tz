<template>
    <div class="scroll">
        <p class="scroll__text">
            Скрольте вниз
        </p>
        <div class="scroll__arrow">
            <img src="../../assets/img/arrow-down.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "ScrollDown"
}
</script>

<style lang="scss">
.scroll {
    width: 22px;
    height: 201px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    &__text {
        font-style: 14px;
        font-family: "kinopoisk-regular";
        writing-mode: vertical-rl;
        transform: rotate(180deg);
    }
}

@media screen and (max-width: 1000px) {
        .scroll {
            display: none;
        }
    }
</style>