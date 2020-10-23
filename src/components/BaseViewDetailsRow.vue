<template>
  <div class="w-full flex flex-row space-x-2 mt-4">
    <div class="w-24 h-24 flex-shrink-0 cursor-pointer">
      <img :src="data.image[0].url" class="w-full h-full object-cover" />
    </div>
    <div class="text-sm break-normal flex-shrink">
      <p class="font-semibold cursor-pointer">
        {{ data.name }}
      </p>
      <p class="text-gray text-xs">
        {{ data.description }}
      </p>
    </div>
    <div class="text-sm flex-shrink-0">
      <p class="font-semibold">$ {{ data.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseViewDetailsSingleRow',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index;
      this.$emit('itemClicked', index);
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
