<template>
  <div class="absolute inset-y-0 top-0 w-full h-full z-30">
    <div class="w-64 h-64" v-if="!$apollo.loading">
      <img :src="details.image.url" class="object-fit" />
    </div>
    <div class="p-4">
      <p class="text-lg font-semibold">{{ details.name }}</p>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'ViewDetails',
  data() {
    return {
      details: {}
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
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id
        };
      }
    }
  }
};
</script>
