<template>
  <div class="w-full h-full relative" v-if="!$apollo.loading">
    <div class="px-8">
      <h2 class="text-3xl font-bold">
        My Cart
      </h2>
      <p class="text-sm mt-2">{{ getCartItemCount }} items added</p>
    </div>
    <div class="px-8">
      <div v-for="item in getCartItems" :key="item.id">
        <BaseViewDetailsRow :data="item" />
      </div>
    </div>
    <div class="fixed bottom-0 w-full p-0">
      <button class="w-full bg-primary-blue text-white p-4 uppercase">
        Order
      </button>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import BaseViewDetailsRow from '@/components/BaseViewDetailsRow.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Cart',
  provide() {
    return {
      isCartPage: this.$route.meta.isCartPage
    };
  },
  components: {
    BaseViewDetailsRow
  },
  data() {
    return {
      cartData: {}
    };
  },
  computed: {
    getCartItemCount() {
      return this.cartData.cart.cart_product[0].menu_items.length;
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
    ...mapActions('common', ['setOverlayVisible'])
  },
  apollo: {
    cartData: {
      query: gql`
        query GetCartDetails($id: ID!) {
          cartData: user(id: $id) {
            username
            cart {
              id
              cart_product {
                id
                menu_items {
                  id
                  name
                  price
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      `,
      variables() {
        return {
          id: 1
        };
      }
    }
  }
};
</script>
