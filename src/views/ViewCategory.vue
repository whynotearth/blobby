<template>
  <BaseMainView v-if="!$apollo.loading">
    <template #heading>
      {{ cardData.name }}
    </template>
    <template #content>
      <div
        v-for="item in cardData.restaurants"
        :key="item.title"
        class="space-y-4"
      >
        <SingleCard :data="item" @clicked="openDetails" />
      </div>
    </template>
  </BaseMainView>
</template>

<script>
import BaseMainView from '@/components/BaseMainView.vue';
import SingleCard from '@/components/SingleCard.vue';
import gql from 'graphql-tag';

export default {
  name: 'ViewCategory',
  components: {
    BaseMainView,
    SingleCard
  },
  props: {
    category: { type: String },
    id: { type: String || Number }
  },
  data() {
    return {
      cardData: {}
    };
  },
  apollo: {
    cardData: {
      query: gql`
        query GetCardDetails($id: ID!) {
          cardData: category(id: $id) {
            id
            name
            restaurants {
              id
              name
              image {
                url
              }
            }
          }
        }
      `,
      variables() {
        return {
          id: this.id
        };
      },
      fetchPolicy: 'cache-and-network'
    }
  },
  methods: {
    openDetails(value) {
      this.$router.push({
        name: 'ViewDetails',
        params: { id: value.id }
      });
    }
  }
};
</script>
