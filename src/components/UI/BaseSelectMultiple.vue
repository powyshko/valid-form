<template>
  <div class="body-select">
    <slot></slot>
    <select v-model="selected" multiple class="select">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.option"
        class="select__item"
      >
        {{ option.value }}
      </option>
    </select>

    <template v-if="v.$error">
      <div
        class="errors-msg"
        v-for="(err, index) in errorArray"
        :key="`err-${index}`"
      >
        {{ err }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BaseSelectMultiple",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Array,
      default: () => [],
    },
    v: {
      type: Object,
      required: false,
    },
    errorArray: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisibleOptions: false,
    };
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="sass">
.body-select
  width: 100%
  margin: 0px 0px 15px 0px

.select
  width: 100%
  padding: 8px
  border: 1px solid #cccccc
  border-radius: 10px
  background: #FFFFFF
  font-size: 16px
  margin: 10px 0px 5px 0px

  &__item
    width: 100%
</style>
