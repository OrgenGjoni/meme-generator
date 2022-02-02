<template>
    <div class="c-main">
        <div class="c-main-grid">
            <Card v-for="item in getData.memes" :src = "item.url" :name = "item.name" :id = "item.id" :key="item" />
        </div>
    </div>
</template>

<script>
    import { onMounted } from '@vue/runtime-core'
    import Vuex, {useStore} from "vuex"
    import {Card} from "../../components";

    export default {
        name: "Main",
        components: {
            Card
        },
        methods: {
            increment(){
                this.$store.commit("increment");
                console.log(this.getData);
            }
        },
        computed: {
            ...Vuex.mapGetters(["getCount", "getData"])
        },
        setup(){
            const store = useStore();
            onMounted(()=>{
                store.commit("loadMemes");
            });
        }
    }
</script>

<style lang="scss">
    @import "./main.scss";
</style>
