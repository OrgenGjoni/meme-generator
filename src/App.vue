<template>
  <div :class="`${getTheme}`">
    <header-component />
    <router-view />
  </div>
</template>

<script>
import { HeaderComponent } from './components/'
import Vuex from "vuex";
export default {
  name: 'App',
  components: { HeaderComponent },
  computed: {
    ...Vuex.mapGetters(["getTheme"])
  }
}
</script>

