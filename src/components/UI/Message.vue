<template>
  <div class="msg" :class="classMsg"><slot /></div>
</template>

<script>
export default {
  name: "Message",
  props: {
    classMsg: {
      type: String,
      default: "success",
    },
  },
};
</script>

<style lang="sass">
.msg
  font-size: 16px
  margin: 10px 0px 10px 0px

.success
  color: #00ae00
</style>
