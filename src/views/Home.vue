<template>
  <BaseMainView>
    <template #heading>
      Discover new <br />
      tasting experiences
    </template>
    <template #content>
      <div v-for="item in content" :key="item.title">
        <BaseHorizontalSlider
          :title="item.title"
          :sliderContent="item.sliderContent"
          :imageSize="item.imageSize"
          @clicked="showDetails"
        />
      </div>
    </template>
  </BaseMainView>
</template>

<script>
import BaseHorizontalSlider from '@/components/BaseHorizontalSlider.vue';
import BaseMainView from '@/components/BaseMainView.vue';
export default {
  name: 'Home',
  components: {
    BaseHorizontalSlider,
    BaseMainView
  },
  data() {
    return {
      content: [
        {
          title: 'All cuisines',
          sliderContent: [
            {
              subtitle: 'Indian',
              image:
                'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb',
              count: 30
            },
            {
              subtitle: 'Italian',
              image:
                'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb',
              count: 24
            },
            {
              subtitle: 'Japanese',
              image:
                'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb',
              count: 15
            },
            {
              subtitle: 'Chinese',
              image:
                'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb',
              count: 20
            }
          ]
        },
        {
          title: 'By type of food',
          sliderContent: [
            {
              subtitle: 'Burger',
              image:
                'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb',
              count: 25
            },
            {
              subtitle: 'Pizza',
              image:
                'https://images.pexels.com/photos/2741457/pexels-photo-2741457.jpeg?auto=compress&cs=tinysrgb',
              count: 30
            },
            {
              subtitle: 'Noodles',
              image:
                'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb',
              count: 10
            },
            {
              subtitle: 'Cake',
              image:
                'https://images.pexels.com/photos/1579926/pexels-photo-1579926.jpeg?auto=compress&cs=tinysrgb',
              count: 5
            }
          ]
        },
        {
          title: 'All Restaurants',
          imageSize: 56,
          sliderContent: [
            {
              subtitle: 'Lilys Burger',
              image:
                'https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb'
            },
            {
              subtitle: 'Angkor Tacos',
              image:
                'https://res.cloudinary.com/whynotearth/image/upload/v1593521242/foodouken/tenant_upload/k71uenkkzmzcmhlz8qdq.jpg'
            },
            {
              subtitle: 'Indian Tadka',
              image:
                'https://res.cloudinary.com/whynotearth/image/upload/v1593755944/foodouken/tenant_upload/v8urebtpgbaatvk27jgf.jpg'
            },
            {
              subtitle: 'Swiss Restaurant & Delivery',
              image:
                'https://res.cloudinary.com/whynotearth/image/upload/v1597723056/foodouken/tenant_upload/jt59wnazggkaoosdbci8.jpg'
            }
          ]
        }
      ]
    };
  },
  methods: {
    showDetails(value) {
      let restaurant = this.content[2].sliderContent;
      this.$router.push({
        name: 'ViewRestaurant',
        params: {
          restaurantData: restaurant.find(val => value === val.subtitle)
        }
      });
    }
  }
};
</script>
