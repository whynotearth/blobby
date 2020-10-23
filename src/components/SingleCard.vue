<template>
  <div
    class="w-full h-full mt-8 space-y-4 cursor-pointer"
    @click="$emit('clicked', data)"
  >
    <div class="w-64 h-64 mx-auto">
      <img :src="data.image.url" class="object-cover" />
    </div>
    <div class="mx-auto">
      <p class="font-semibold">{{ data.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
