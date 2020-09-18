<template>
  <div class="h-full w-screen">
    <BaseHeader v-if="appBar" :title="appBar.title" :icon="appBar.icon" />
    <transition name="fade">
      <router-view class="mx-auto box-border h-full" />
    </transition>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';

export default {
  name: 'AppBarLayout',
  components: {
    BaseHeader
  },
  computed: {
    appBar() {
      return this.$route.meta.appBar;
    }
  }
};
</script>
