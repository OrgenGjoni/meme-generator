<template>
    <div class="c-caption-action">
        <img :src="imgUrl" class="c-caption-template"/>
        <form>
            <input type="text" placeholder="Text #1" v-model="text0"/>
            <input type="text" placeholder="Text #2" v-model="text1"/>
            <button type="submit" @click="handleSubmit">Submit</button>
        </form>
    </div>
</template>

<script>
    import Vuex from "vuex";
    export default {
        name: "CaptionMeme",
        data(){
            return{
                text0: null,
                text1: null
            }
        },
        computed: {
            ...Vuex.mapGetters(["getSelectedItem","getCaptionRes"]),
            imgUrl(){
                return this.getCaptionRes ? this.getCaptionRes?.data.url : this.getSelectedItem?.src;
            }
        },
        methods:{
            handleSubmit(e){
                e.preventDefault();
                const payload = {
                    text0: this.text0,
                    text1: this.text1,
                    template_id: this.getSelectedItem.id
                };

                this.$store.commit("captionMeme", payload)
            }
        },
        mounted(){
            this.getSelectedItem ?? this.$router.push({name: "Main"});
        }
    }
</script>

<style lang="scss">
    @import "./caption-meme.scss";
</style>
