<template>
  <nav class="top-0 w-full p-4 z-100 bg-primary bg-background">
    <div class="container mx-auto flex flex-row flex-wrap">
      <div class="flex-start mr-3 flex-shrink-0" v-show="this.icon">
        <router-link class="inline-block align-middle" :to="toLink">
          <img :src="getIcon" />
        </router-link>
      </div>
      <transition name="fade" mode="out-in">
        <div :key="title" class="font-bold truncate flex-grow text-center">
          {{ title }}
        </div>
      </transition>
      <!-- The action only has routing -->
      <router-link
        v-if="action && !action.method"
        class="flex-grow flex-shrink-0 inline-block tg-h3-mobile text-right"
        :to="action.link"
        >{{ action.label }}</router-link
      >
      <!-- The action emits a method, like finish (Add, Edit) -->
      <div
        v-if="action && action.method"
        class="flex-grow flex-shrink-0 inline-block tg-h3-mobile text-right cursor-pointer"
        :class="{ disabled: action.disabled }"
        @click="emitAction()"
      >
        {{ action.label }}
      </div>
      <slot name="menu"></slot>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    toLink: {
      type: [String, Object],
      default: '/'
    },
    action: {
      type: Object,
      default: () => {}
    },
    icon: {
      type: String
    },
    bgColor: {
      type: String
    }
  },
  computed: {
    background() {
      return this.bgColor ? `bg-${this.bgColor}` : 'bg-transparent';
    },
    getIcon() {
      return '';
    }
  }
};
</script>

<style scoped>
.disabled {
  color: rgba(0, 0, 0, 0.38);
  cursor: default;
}
</style>
