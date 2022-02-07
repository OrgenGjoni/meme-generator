<template>
    <div class="c-header">
        <img class="c-header-pic" alt="" :src="pic"/>
        <h2>-Meme and chill?</h2>
        <theme-button />
    </div>
</template>

<script>
    import headerPic from "../../assets/headerPic.png";
    import { ThemeButton } from '../';
    export default {
        name: "HeaderComponent",
        components: {
            ThemeButton
        },
        data(){
            return {
                pic: headerPic,
            }
        }
    }
</script>

<style lang="scss">
    @import "./header-component.scss";
</style>