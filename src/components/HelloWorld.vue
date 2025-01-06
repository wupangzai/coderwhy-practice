<template>
  <button @click="clickFn">clickFn</button>
  <slot2 :arry="arry" v-slot="slotProps">
    <button>{{ slotProps.item }}</button>
  </slot2>
</template>

<script>
import test from "./test.vue";
import bro from "./bro.vue";
import slot2 from "./slot2.vue";
export default {
  inheritAttrs: false,
  // 对象写法的目的是为了进行参数的验证
  inject: ["provideData"],

  emits: {
    // click: null, // null 表示不需要验证
    click: (payload) => {
      // if payload xxx return true / false
    },
  },
  components: {
    test,
    slot2,
  },
  name: "HelloWorld",
  data() {
    return {
      arry: ["dingzhen", "xuebao "],
    };
  },
  props: {
    msg: {
      type: String,
    },
    objectProps: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    clickFn() {
      this.$emit("click", "参数");
    },
  },
  created() {
    console.log("hello", this.provideData);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
