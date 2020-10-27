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
import { mapActions } from 'vuex';

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
  watch: {
    '$apollo.loading': {
      handler() {
        this.setOverlayVisible(Boolean(this.$apollo.loading));
      }
    }
  },
  methods: {
    ...mapActions('common', ['setOverlayVisible']),
    showDetails(value) {
      if (value.__typename === 'Restaurant') {
        this.$router.push({
          name: 'ViewDetails',
          params: { name: value.name, id: value.id }
        });
      } else if (value.__typename === 'Categories') {
        this.$router.push({
          name: 'ViewCategory',
          params: { category: value.name, id: value.id }
        });
      }
    }
  }
};
</script>
