<template>
  <div>
    <template v-for="(item, index) in arry" :key="index">
      <slot name="defult" :item="item"> </slot>
    </template>
    <slot name="other"></slot>
  </div>
</template>

<script>
export default {
  name: "Slot",
  props: {
    arry: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
