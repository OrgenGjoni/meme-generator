<template>
  <div :class="`${randomBorderColor}`" @click="selectItem">
    <div :class="`c-card-inner ${getTheme}`">
      <img :src="src" loading="lazy" />
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["src", "id", "name", "boxCount"],
  computed: {
    randomBorderColor() {
      const rand = Math.random() * 10;
      return rand < 3
        ? "c-card green-border"
        : rand < 6
        ? "c-card purple-border"
        : "c-card blue-border";
    },
  },
  methods: {
    selectItem() {
      this.$store.commit("setSelectedItem", {
        id: this.id,
        src: this.src,
        name: this.name,
        boxCount: this.boxCount,
      });
      this.$router.push({ name: "CaptionMeme" });
    },
  },
};
</script>

<style lang="scss">
@import "./card.scss";
</style>
