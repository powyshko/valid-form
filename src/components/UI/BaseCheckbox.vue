<template>
  <div class="checkbox" v-bind="$attrs">
    <input
      v-model="checkbox"
      type="checkbox"
      :checked="checked"
      @input="input"
      @change="change"
      id="check"
    />

    <label for="check"></label>
    <span><slot /></span>
  </div>
</template>
<script>
export default {
  name: "BaseCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      checkbox: this.value,
    };
  },
  watch: {
    value(value) {
      this.checkbox = value;
    },
  },
  methods: {
    input() {
      this.$emit("input", !this.checkbox);
    },
    change() {
      this.$emit("change");
    },
  },
};
</script>

<style lang="sass">
.checkbox
  display: flex
  align-items: center

  input
    display: none

  label
    display: inline-block
    width: 20px
    height: 20px
    border: 1px solid #cccccc
    border-radius: 2px
    margin: 0px 10px 0px 0px

  input:checked + label
    background: rgba(18, 18, 18, 0.7)
</style>
