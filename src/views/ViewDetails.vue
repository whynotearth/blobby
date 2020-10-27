<template>
  <div class="absolute inset-y-0 top-0 w-full h-full z-30">
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
        <div v-for="data in getCurrentMenuSection" :key="data.id">
          <BaseViewDetailsRow :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import BaseHorizontalTextSlider from '@/components/BaseHorizontalTextSlider.vue';
import BaseViewDetailsRow from '@/components/BaseViewDetailsRow.vue';
import { mapActions } from 'vuex';

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
    ...mapActions('common', ['setOverlayVisible'])
  }
};
</script>
