<template>
  <nav class="top-0 w-full z-100 bg-primary bg-transparent">
    <div class="flex flex-row justify-between">
      <div class="flex-start mr-3 flex-shrink-0">
        <a class="inline-block align-middle text-midnight-blue">
          <IconHamburger />
        </a>
      </div>
      <div class="text-right cursor-pointer" @click="emitAction()">
        <IconShoppingBag />
      </div>
      <slot name="menu"></slot>
    </div>
  </nav>
</template>

<script>
import IconHamburger from '@/assets/icons/icon_hamburger.svg';
import IconShoppingBag from '@/assets/icons/icon_shopping_bag.svg';

export default {
  name: 'BaseMenuHeader',
  components: {
    IconHamburger,
    IconShoppingBag
  }
};
</script>
