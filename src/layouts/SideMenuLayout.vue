<template>
  <div class="h-full w-full">
    <BaseMenuHeader />
    <transition name="fade">
      <router-view class="mx-auto box-border max-h-full" />
    </transition>
  </div>
</template>

<script>
import BaseMenuHeader from '@/components/BaseMenuHeader';
export default {
  name: 'SideMenuLayout',
  components: {
    BaseMenuHeader
  }
};
</script>
