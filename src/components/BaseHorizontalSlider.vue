<template>
  <div class="w-full py-4 overflow-hidden">
    <div class="flex flex-row justify-between items-end">
      <p class="font-semibold text-lg">{{ title }}</p>
      <p class="text-sm font-light">View all</p>
    </div>
    <div
      class="max-w-full flex flex-row flex-no-wrap mt-4 space-x-6 overflow-x-auto box-content hide-scrollbar"
    >
      <div class="flex flex-col" v-for="item in sliderContent" :key="item.id">
        <div :class="`w-${imageSize} h-${imageSize} cursor-pointer`">
          <img
            :src="item.image"
            class="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div class="flex flex-row py-4 text-sm gap-1">
          <p class="font-semibold" v-if="item.subtitle">
            {{ item.subtitle }}
          </p>
          <p class="text-gray" v-show="item.count">({{ item.count }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHorizontalSlider',
  props: {
    title: {
      type: String,
      required: true
    },
    sliderContent: {
      type: Array,
      required: true
    },
    imageSize: {
      type: Number,
      default: 32
    }
  },
  computed: {
    getParentHeight() {
      return this.imageSize * 2;
    }
  }
};
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
