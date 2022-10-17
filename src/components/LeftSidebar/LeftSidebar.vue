<template>
    <div class="sidebar">
        <BurgerMenu/>
        <SidebarProgress/>
        <ScrollDown/>
    </div>
</template>

<script>
import BurgerMenu from "./BurgerMenu.vue"
import SidebarProgress from "./SidebarProgress.vue"
import ScrollDown from "./ScrollDown.vue"

export default {
    name: "LeftSidebar",
    components: {
        BurgerMenu,
        SidebarProgress,
        ScrollDown
    }
}
</script>

<style lang="scss">
.sidebar {
    max-width: 180px;
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 37px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 100;
}
</style>