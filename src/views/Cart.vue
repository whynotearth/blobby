<template>
  <div class="w-full h-full relative" v-if="!$apollo.loading">
    <div class="px-6">
      <h2 class="text-3xl font-bold">
        My Cart
      </h2>
      <p class="text-sm mt-2">{{ getTotalItemsCount }} items added</p>
    </div>
    <div class="px-6" v-if="getOrderLines.length > 0">
      <div v-for="item in getOrderLines" :key="item.id" class="p-0">
        <BaseViewDetailsRow :data="item" />
      </div>
    </div>
    <div class="relative mx-auto text-center" v-else>
      <p class="font-semibold text-lg">Your cart is empty</p>
    </div>
    <div
      class="fixed bottom-0 w-full items-center uppercase p-4 space-y-3 bg-white shadow-4dp"
      v-if="getOrderLines.length > 0"
    >
      <div class="flex flex-row justify-between items-center text-sm">
        <p>
          Total
        </p>
        <p>$ {{ calculateTotalPrice }}</p>
      </div>
      <div class="bg-green-600 p-2">
        <button
          class="w-full text-white font-semibold focus:outline-none"
          @click="createOrder"
        >
          Order Now
        </button>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="overlayModel.title"
        class="w-full h-full fixed block top-0
        left-0 z-110"
      >
        <BaseSuccessOverlay :title="overlayModel.title" />
      </div>
    </transition>
  </div>
</template>

<script>
// import gql from 'graphql-tag';
import BaseViewDetailsRow from '@/components/BaseViewDetailsRow.vue';
import { mapActions, mapGetters } from 'vuex';
import CREATE_ORDER from '@/queries/cart/CreateOrder.gql';
import BaseSuccessOverlay from '@/components/BaseSuccessOverlay.vue';
import { showOverlayAndRedirect } from '@/helpers';

export default {
  name: 'Cart',
  provide() {
    return {
      isCartPage: this.$route.meta.isCartPage
    };
  },
  components: {
    BaseViewDetailsRow,
    BaseSuccessOverlay
  },
  data() {
    return {
      cartData: {}
    };
  },
  computed: {
    ...mapGetters('cart', ['getOrderLines', 'getTotalItemsCount']),
    ...mapGetters('overlay', {
      overlayModel: 'model'
    }),
    calculateTotalPrice() {
      return this.getOrderLines
        .map(val => val.price)
        .reduce((acc, currValue) => {
          return acc + currValue;
        });
    },
    getCartItems() {
      return this.cartData.cart.cart_product[0].menu_items;
    }
  },
  watch: {
    '$apollo.loading': {
      handler() {
        this.setOverlayVisible(Boolean(this.$apollo.loading));
      }
    }
  },
  methods: {
    ...mapActions('common', ['setOverlayVisible']),
    ...mapActions('cart', ['emptyCart']),
    createOrder() {
      try {
        showOverlayAndRedirect({
          title: 'Order Successfully',
          route: {
            name: 'Home'
          }
        });
        this.$apollo.mutate({
          mutation: CREATE_ORDER,
          variables: {
            input: {
              data: {
                address: '204 test view',
                postal_code: '100006',
                city: 'New York',
                amount: this.calculateTotalPrice,
                name: 'kaze',
                email: 'test@gmail.com',
                phone_number: '123456789',
                order_lines: [
                  ...this.getOrderLines.map(el => {
                    return {
                      name: el.name,
                      price: el.price
                      // quantity: el.quantity
                    };
                  })
                ]
              }
            }
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  },
  beforeDestroy() {
    console.log('destory called');
    this.emptyCart();
  }
};
</script>
