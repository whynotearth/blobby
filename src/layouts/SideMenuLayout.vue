<template>
  <div class="h-full w-full">
    <BaseMenuHeader @open-side-menu="isMenuOpen = !isMenuOpen" />
    <transition name="fade">
      <router-view class="mx-auto box-border max-h-full" />
    </transition>
    <transition name="slide-in-left">
      <SideMenu
        v-if="isMenuOpen"
        v-click-outside="onClickOutside"
        @close-side-menu="onClickOutside"
      />
    </transition>
  </div>
</template>

<script>
import BaseMenuHeader from '@/components/BaseMenuHeader';
import SideMenu from '@/components/SideMenu';
import vClickOutside from 'v-click-outside';

export default {
  name: 'SideMenuLayout',
  components: {
    BaseMenuHeader,
    SideMenu
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    onClickOutside() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.slide-in-left-enter-active {
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-left-leave-active {
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse;
}

@keyframes slide-in-left {
  0% {
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
