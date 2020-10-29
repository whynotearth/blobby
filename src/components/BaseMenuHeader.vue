<template>
  <nav class="top-0 w-full z-100 bg-transparent mt-1 p-4">
    <div class="flex flex-row justify-between items-center">
      <div :class="{ 'rounded-full bg-white p-2': isRestaurantPage }">
        <a class="inline-block align-middle">
          <IconBackNew v-if="isRestaurantPage" />
          <IconHamburger v-else />
        </a>
      </div>
      <div class="flex-end flex justify-center items-center space-x-1">
        <div class="cursor-pointer" v-if="isRestaurantPage">
          <a class="inline-block align-middle bg-white rounded-full p-2">
            <IconHeart />
          </a>
        </div>
        <!-- <div
          class="cursor-pointer"
          @click="$router.push({ name: 'MyCart' })"
          :class="{ 'rounded-full bg-white': isRestaurantPage }"
        >
          <a class="inline-block align-middle p-2" v-if="!isCartPage">
            <IconShoppingBag />
          </a>
        </div> -->
        <slot name="menu"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
import IconHamburger from '@/assets/icons/icon_hamburger.svg';
import IconShoppingBag from '@/assets/icons/icon_shopping_bag.svg';
import IconBackNew from '@/assets/icons/arrow-left.svg';
import IconHeart from '@/assets/icons/heart.svg';

export default {
  name: 'BaseMenuHeader',
  components: {
    IconHamburger,
    IconShoppingBag,
    IconBackNew,
    IconHeart
  },
  computed: {
    isRestaurantPage() {
      return this.$route.meta.isRestaurantPage;
    },
    isCartPage() {
      return this.$route.meta.isCartPage;
    }
  }
};
</script>
