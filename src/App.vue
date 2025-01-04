<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld
    msg="Welcome to Your Vue.js App"
    extraProps="extraProps"
    @click="listen"
  />
  <button @click="click">click</button>
</template>

<script>
import { computed } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  provide() {
    return {
      provideData: computed(() => this.provideData),
    };
  },
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      provideData: "provideDatada",
    };
  },
  methods: {
    click() {
      this.provideData = "click";
      console.log(this.provideData);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
