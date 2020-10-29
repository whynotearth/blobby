<template>
  <div class="w-full h-full relative">
    <div class="-mt-20 inset-0 z-30">
      <div class="w-64 h-64 mx-auto" v-if="!$apollo.loading">
        <img :src="details.image.url" class="object-fit" />
      </div>
      <div class="p-4" v-if="!$apollo.loading">
        <div>
          <p class="text-lg font-semibold">{{ details.name }}</p>
          <p class="mt-4 text-sm">{{ details.description }}</p>
        </div>
        <div>
          <BaseHorizontalTextSlider
            :data="details.menu_sections"
            @itemClicked="currenMenuSectionIndex = $event"
          />
        </div>
        <div>
          <div
            v-for="data in getCurrentMenuSection"
            :key="data.id"
            class="mb-6"
          >
            <BaseViewDetailsRow :data="data" @add-to-cart="addToCart" />
          </div>
        </div>
      </div>
    </div>
    <transition name="fade" mode="in-out">
      <div
        class="relative bottom-0 inset-0 bg-green-600 text-center p-4"
        v-if="getTotalItemsCount > 0"
      >
        <router-link
          class="text-white p-2 uppercase font-semibold"
          :to="{ name: 'MyCart' }"
        >
          My Cart Items ({{ getTotalItemsCount }})
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import BaseHorizontalTextSlider from '@/components/BaseHorizontalTextSlider.vue';
import BaseViewDetailsRow from '@/components/BaseViewDetailsRow.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ViewDetails',
  components: {
    BaseHorizontalTextSlider,
    BaseViewDetailsRow
  },
  data() {
    return {
      details: {},
      currenMenuSectionIndex: 0
    };
  },
  apollo: {
    details: {
      query: gql`
        query GetDetails($id: ID!) {
          details: restaurant(id: $id) {
            name
            description
            image {
              url
            }
            menu_sections {
              id
              name
              menu_items {
                id
                name
                price
                description
                short_description
                image {
                  url
                }
              }
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id
        };
      }
    }
  },
  computed: {
    ...mapGetters('cart', ['getTotalItemsCount']),
    getCurrentMenuSection() {
      return this.details.menu_sections[this.currenMenuSectionIndex].menu_items;
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
    ...mapActions('cart', ['addItem']),
    addToCart(value) {
      this.addItem(value);
    }
  }
};
</script>
