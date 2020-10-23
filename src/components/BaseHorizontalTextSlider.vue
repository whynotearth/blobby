<template>
  <div class="w-full py-4 overflow-hidden">
    <!--<div class="flex flex-row justify-between items-end">
      <p class="font-semibold text-lg">{{ data[0].__typename }}</p>
      <p class="text-sm font-light">View all</p>
    </div>-->
    <div
      class="max-w-full flex flex-row flex-no-wrap mt-4 space-x-8 overflow-x-auto box-content hide-scrollbar"
    >
      <div class="flex flex-col" v-for="(item, index) in data" :key="index">
        <div
          class="flex flex-row py-4 text-sm gap-1 break-words cursor-pointer"
          @click="selectItem(index)"
        >
          <p
            class="font-semibold text-lg"
            :class="[currentIndex === index ? 'text-black' : 'text-gray']"
            v-if="item.name"
          >
            {{ item.name }}
          </p>
          <p class="text-gray" v-show="item.count">({{ item.count }})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseHorizontalTextSlider',
  props: {
    data: {
      type: Array,
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
