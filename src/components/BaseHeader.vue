<template>
  <div
    class="h-14 w-full px-2 py-5 sticky top-0 z-40 flex justify-between items-center"
    :class="[background]"
  >
    <a
      v-if="$slots.icon"
      @click.prevent="$emit('icon-clicked')"
      class="cursor-pointer w-10 h-10 flex justify-center items-center"
    >
      <span class="opacity-high"><slot name="icon"/></span>
    </a>
    <div
      v-if="$slots.content"
      :class="{ 'flex-grow': !$slots.icon }"
      class="tg-h2-mobile text-center"
    >
      <slot name="content" />
    </div>
    <div class="tg-color-label-mobile ml-auto">
      <slot name="end" />
    </div>

    <slot name="menu-drawer" />
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    bgColor: {
      type: String
    }
  },
  computed: {
    background() {
      return this.bgColor ? `bg-${this.bgColor}` : 'bg-transparent';
    }
  }
};
</script>
