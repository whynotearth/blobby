<template>
  <div class="w-full flex flex-row mt-4 justify-evenly">
    <div class="w-20 h-20 cursor-pointer" v-if="data.image">
      <img :src="data.image[0].url" class="w-full h-full object-cover" />
    </div>
    <div class="text-sm break-normal w-1/2">
      <p class="font-semibold cursor-pointer">
        {{ data.name }}
      </p>
      <p class="text-gray text-xs">
        {{ data.description }}
      </p>
      <div class="mt-4 inline-flex space-x-2" v-if="isCartPage">
        <button
          class="font-bold w-8 h-8 flex items-center justify-center border border-red-600 rounded-full focus:outline-none"
        >
          -
        </button>
        <div
          class="font-bold w-8 h-8 flex items-center justify-center border border-primary-blue rounded-full focus:outline-none"
        >
          1
        </div>
        <button
          class="font-bold w-8 h-8 flex items-center justify-center border border-green-600 rounded-full focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
    <div class="text-sm">
      <p class="font-semibold">$ {{ data.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseViewDetailsSingleRow',
  inject: { isCartPage: { default: false } },
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
