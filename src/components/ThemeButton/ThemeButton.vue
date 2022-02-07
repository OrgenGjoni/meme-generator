<template>
    <div class="c-theme-button" @click="toggleTheme">
        <img v-if="getTheme === 'DARK'" :src="sunSVG" />
        <img v-if="getTheme === 'LIGHT'" :src="moonSVG" />
    </div>
</template>

<script>
    import Vuex from "vuex";
    import sun from "../../assets/sun.svg";
    import moon from "../../assets/moon.svg";

    export default {
        name: "ThemeButton",
        data(){
            return {
                sunSVG: sun,
                moonSVG: moon
            }
        },
        computed: {
            ...Vuex.mapGetters(["getTheme"]),
        },
        methods: {
            toggleTheme(){
                const theme = this.getTheme === "LIGHT" ? "DARK" : "LIGHT";
                this.$store.commit("setTheme", theme);
            }
        }
    }
</script>

<style lang="scss">
    @import "./theme-button.scss";
</style>