<template>
    <div class="c-main">
        <div class="c-main-grid">
            <Card v-for="item in getData.memes" :src = "item.url" :name = "item.name" :id = "item.id" :boxCount = "item.box_count" :key="item" />
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex"
    import {Card} from "../../components";

    export default {
        name: "Main",
        components: {
            Card
        },
        computed: {
            ...Vuex.mapGetters(["getCount", "getData"])
        },
        mounted(){
            this.$store.commit("loadMemes");
            this.$store.commit("clearCaptionRes");
        }
    }
</script>

<style lang="scss">
    @import "./main.scss";
</style>
