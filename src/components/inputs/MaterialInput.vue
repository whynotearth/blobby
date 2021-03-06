<template>
  <div class="relative w-full px-8 mb-4">
    <input
      class="relative w-full px-1 py-2 mt-2 bg-transparent outline-none appearance-none input text-opacity-medium focus:text-opacity-high border-opacity-medium focus:border-opacity-high"
      :class="[
        textColor,
        borderColor,
        border,
        { filled: value && value.length > 0 }
      ]"
      v-bind="attrs"
      :id="idName"
      :type="type"
      :min="min"
      :step="step"
      :value="value"
      @blur="$emit('input', $event.target.value)"
      :placeholder="label"
      :pattern="pattern"
    />
    <label
      :for="idName"
      class="absolute top-0 left-0 label cursor-text"
      :class="[labelColor]"
    >
      {{ label }}
    </label>
    <div class="mt-2 ml-4 text-error tg-body-mobile" v-if="error">
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
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      default: 'Label'
    },
    type: {
      type: String,
      default: 'text'
    },
    min: {
      type: [String, Number],
      default: 0
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
    border: {
      type: String,
      default: 'border-b'
    },
    textColor: {
      type: String,
      default: 'text-midnight-blue'
    },
    labelColor: {
      type: String,
      default: 'text-primary-blue'
    },
    pattern: {
      type: String
    },
    // update value on input event
    immediateInput: {
      type: Boolean,
      default: false
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

.label {
  transition: all 0.2s ease-out;
  transition: all 200ms;
  opacity: 0;
  left: 35px;
  padding: 0 0 10px 0px;
  z-index: 1;
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  opacity: 1;
  display: block;
  z-index: 3;
}

.input:focus::placeholder {
  color: transparent;
}
</style>
