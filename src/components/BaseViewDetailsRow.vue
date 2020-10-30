<template>
  <div class="w-full flex mt-4 justify-around space-x-2">
    <div class="w-20 h-20 cursor-pointer" v-if="data.image">
      <img :src="data.image[0].url" class="w-full h-full object-cover" />
    </div>
    <div class="text-sm break-normal flex-1">
      <p class="font-semibold cursor-pointer">
        {{ data.name }}
      </p>
      <p class="text-gray text-xs" v-if="!isCartPage">
        {{ data.description }}
      </p>
      <div class="mt-4 inline-flex space-x-4" v-if="!isCartPage">
        <button
          class="font-bold w-6 h-6 flex items-center justify-center border border-red-600 rounded-full focus:outline-none"
          @click="removeFromCart(data)"
        >
          -
        </button>
        <!-- <div
          class="font-bold flex items-center justify-center focus:outline-none"
        >
          {{ data.quantity }}
        </div> -->
        <button
          class="font-bold w-6 h-6 flex items-center justify-center border border-green-600 rounded-full focus:outline-none"
          @click="addToCart(data)"
        >
          +
        </button>
      </div>
    </div>
    <div class="text-sm space-y-4 flex-shrink-0 text-left">
      <p class="font-semibold">$ {{ data.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseViewDetailsRow',
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
    },
    addToCart(value) {
      this.$emit('add-to-cart', value);
    },
    removeFromCart(value) {
      this.$emit('remove-from-cart', value);
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
