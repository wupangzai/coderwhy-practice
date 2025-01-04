<template>
  <div>
    <h2>start</h2>
    <slot>
      <div>默认内容</div>
    </slot>
    <h2>end</h2>
  </div>
</template>

<script>
export default {
  name: "Slot",
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
