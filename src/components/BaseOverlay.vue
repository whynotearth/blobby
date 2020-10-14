<template>
  <div
    class="absolute w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-30"
  >
    <BaseSpinner borderColor="border-primary-blue" />
  </div>
</template>

<script>
import BaseSpinner from '@/components/BaseSpinner.vue';

export default {
  name: 'BaseOverlay',
  components: {
    BaseSpinner
  }
};
</script>
