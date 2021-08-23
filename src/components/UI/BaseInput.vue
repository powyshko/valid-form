<template>
  <div class="base-input">
    <label><slot /></label>
    <input
      :type="type"
      :value="value"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
      @change="v.$touch()"
      :class="{ errorInput: v.$error }"
    />
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
  name: "BaseInput",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    v: {
      type: Object,
      required: false,
    },
    errorArray: {
      type: Array,
      default: () => [],
    },
    data() {
      return {
        model: {
          prop: "value",
          event: "input",
        },
      };
    },
  },
};
</script>

<style lang="sass">
.base-input
  width: 100%
  font-size: 16px
  margin: 0px 0px 15px 0px

  label
    display: block
    margin: 0px 0px 10px 0px


  input
    width: 100%
    padding: 8px
    border: 1px solid #cccccc
    border-radius: 10px

.base-input .errorInput
  border: 1px solid #8f0c0c

.errors-msg
  font-size: 14px
  color: #8f0c0c
</style>
