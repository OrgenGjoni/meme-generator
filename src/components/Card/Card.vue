<template>
    <div class="c-card" @click="selectItem">
        <img :src="src" loading="lazy" />
        <p>{{name}}</p>
    </div>
</template>

<script>

    export default{
        name: "Card",
        props: ["src", "id", "name"],
        computed: {
        },
        methods: {
            logId(){
                console.log(this.id);
            },
            selectItem(){
                this.$store.commit("setSelectedItem",{id: this.id, src: this.src, name: this.name});
                this.$router.push({ name: "CaptionMeme"});
            }
        }
    }
</script>

<style lang="scss">
    @import "./card.scss";
</style>