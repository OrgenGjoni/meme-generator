<template>
    <div class="c-main">
        <p>{{test}}</p>
        <p @click="increment">{{getCount}}</p>
    </div>
</template>

<script>
    import Vuex from "vuex"
    export default {
        name: "Main",
        data(){
            return {test: "test"}
        },
        methods: {
            increment(){
                this.$store.commit("increment");
            }
        },
        computed: {
            ...Vuex.mapGetters(["getCount"])
        }
    }
</script>

<style lang="scss">
    @import "./main.scss";
</style>
