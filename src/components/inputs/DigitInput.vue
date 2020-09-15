<template>
  <div class="relative w-full md:w-1/2 px-4 mb-4">
    <input
      class="input appearance-none outline-none relative bg-transparent w-full 
      border mt-2 py-2 px-1 text-opacity-medium focus:text-opacity-high border-opacity-medium group-hover:rounded-lg
      focus:border-opacity-high border-gray focus:border-primary-blue rounded-lg text-center"
      :class="[textColor, { filled: value && value.length > 0 }]"
      v-bind="attrs"
      :id="idName"
      inputmode="numeric"
      type="tel"
      min="1"
      max="9"
      maxlength="1"
      step="1"
      :value="value"
      v-on="inputListeners"
    />
    <div class="ml-4 mt-2 text-error tg-body-mobile" v-if="error">
      <slot />
    </div>
  </div>
</template>

<script>
import { randomId } from '@/helpers.js';

export default {
  name: 'TextInput',
  props: {
    attrs: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Number,
      default: null
    },
    step: {
      type: String,
      default: '1'
    },
    error: {
      type: Boolean,
      default: false
    },
    idName: {
      type: String,
      default: randomId
    },
    borderColor: {
      type: String,
      default: 'border-light-gray'
    },
    textColor: {
      type: String,
      default: 'text-midnight-blue'
    },

    // update value on input event
    immediateInput: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputListeners: function() {
      return Object.assign({}, this.$listeners, {
        blur: this.onBlur,
        input: this.onInput
      });
    }
  },
  methods: {
    onBlur($event) {
      if (!this.value && !$event.target.value) {
        return;
      }
      this.$emit('input', $event.target.value);
    },
    onInput($event) {
      if (this.immediateInput) {
        this.$emit('input', $event.target.value);
      }
    }
  }
};
</script>

<style scoped>
.input {
  transition: border 0.2s ease-in-out, color 0.2s ease-in-out;
  z-index: 2;
}
.input[readonly] {
  cursor: not-allowed;
  @apply text-opacity-medium;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
