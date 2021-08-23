<template>
  <router-link v-if="to" :to="to" :class="btnClass">
    <slot />
  </router-link>
  <button
    class="btn"
    v-else
    :class="btnClass"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    to: {
      type: String,
      default: "",
    },
    btnClass: {
      type: String,
      default: "btnPrimary",
    },
  },
};
</script>

<style lang="sass">
.btn
  font-size: 14px
  line-height: 20px
  padding: 16px 22px 14px 22px
  border-radius: 10px
  display: inline-block


.btnPrimary
  color: #ffffff
  background: #005aff
</style>
