<template>
  <h2 class="base-subtitle"><slot /></h2>
</template>

<script>
export default {
  name: "BaseH2",
};
</script>

<style lang="sass">
.base-subtitle
  font-size: 22px
  margin: 0px 0px 20px 0px
  font-weight: 500
</style>
