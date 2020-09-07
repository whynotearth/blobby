<template>
  <div class="flex mb-4">
    <div class="flex-1 h-12">
      <BottomNavigation />
    </div>
    <div class="flex-1 h-12"></div>
  </div>
</template>

<script>
import BottomNavigation from '@/components/BottomNavigation.vue';

export default {
  name: 'ViewComponents',
  components: {
    BottomNavigation
  }
};
</script>
