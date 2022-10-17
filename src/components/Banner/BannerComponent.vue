<template>
    <div class="banner">
        <div class="logo">
            <img src="../../assets/img/logo.png" alt="">
        </div>

        <PromoComponent/>

        <div class="right-sidebar">
            <span>hd.kinopoisk.ru</span>
        </div>
    </div>
</template>

<script>
import PromoComponent from "./PromoComponent.vue"

export default {
    name: "BannerComponent",
    components: {
        PromoComponent
    }
}
</script>

<style scoped lang="scss">
.banner {
    width: 100%;
    height: 100vh;
    background: url("../../assets/img/banner.png");
    background-size: cover;
    position: relative;
    }

    .right-sidebar {
        position: fixed;
        top: 0;
        width: 130px;
        height: 100vh;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            transform: rotate(90deg);
            font-size: 18px;
            line-height: 15px;
            color: #333
        }
    }

    .logo {
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 1000px) {
        .right-sidebar {
            display: none;
        }
    }
</style>