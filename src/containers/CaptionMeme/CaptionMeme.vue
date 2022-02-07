<template>
    <div class="c-caption">
        <div class="c-caption-action">
            <img :src="imgUrl" class="c-caption-template"/>
            <form class="c-caption-form">
                <input v-for="item in inputsCount" @input="checkInput" type="text" :placeholder="`Text #${item}`" v-model="text[item]" :key="item"/>
                <button type="submit" @click="handleSubmit" :disabled="!validBoxes">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Vuex from "vuex";
    export default {
        name: "CaptionMeme",
        data(){
            return{
                text: [],
                validBoxes: false
            }
        },
        computed: {
            ...Vuex.mapGetters(["getSelectedItem", "getCaptionRes"]),
            imgUrl(){
                return this.getCaptionRes ? this.getCaptionRes?.data.url : this.getSelectedItem?.src;
            },
            inputsCount(){
                return this.getSelectedItem && Array.from({length: this.getSelectedItem?.boxCount}, (x, i) => i);
            }
        },
        methods:{
            handleSubmit(e){
                e.preventDefault();
                const payload = {
                    textBoxes: JSON.parse(JSON.stringify(this.text)),
                    template_id: this.getSelectedItem.id
                };

                this.$store.commit("captionMeme", payload)
            },
            checkInput(e){
                this.validBoxes = !/^\s*$/.test(e.target.value);
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
