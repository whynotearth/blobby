<template>
  <div id="app" class="antialiased h-full">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
    <div
      class="w-full h-full fixed block top-0 left-0 z-110"
      v-if="isOverlayVisible"
    >
      <BaseOverlay />
    </div>
  </div>
</template>

<script>
import BaseOverlay from '@/components/BaseOverlay.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    BaseOverlay
  },
  computed: {
    ...mapGetters('common', ['isOverlayVisible'])
  }
};
</script>
