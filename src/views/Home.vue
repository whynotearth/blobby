<template>
  <BaseMainView>
    <template #heading>
      Discover new <br />
      tasting experiences
    </template>
    <template #content>
      <div v-for="item in content" :key="item.title">
        <BaseHorizontalSlider :data="item" @clicked="showDetails" />
      </div>
    </template>
  </BaseMainView>
</template>

<script>
import BaseHorizontalSlider from '@/components/BaseHorizontalSlider.vue';
import BaseMainView from '@/components/BaseMainView.vue';
import gql from 'graphql-tag';

export default {
  name: 'Home',
  components: {
    BaseHorizontalSlider,
    BaseMainView
  },
  data() {
    return {
      content: []
    };
  },
  apollo: {
    content: {
      query: gql`
        query {
          restaurants {
            id
            name
            image {
              url
            }
          }
          categories {
            id
            name
            image {
              url
            }
          }
        }
      `,
      update: data => data
    }
  },
  methods: {
    showDetails(value) {
      this.$router.push({
        name: 'ViewDetails',
        params: { name: value.name, id: value.id }
      });
    }
  }
};
</script>
