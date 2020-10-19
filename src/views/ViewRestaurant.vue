<template>
  <div class="absolute inset-y-0 top-0 w-full h-full z-30">
    <div class="">
      <img :src="restaurantData.image" class="object-fit" />
    </div>
    <div class="">
      <p>{{ restaurantData.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewResturant',
  props: {
    restaurantData: {
      type: Object,
      required: true
    }
  }
};
</script>
