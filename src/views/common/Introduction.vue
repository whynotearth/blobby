<template>
  <div>
    <div class="box-border h-full bg-background">
      <p class="absolute w-full p-2 text-right text-primary-blue">Skip</p>
      <swiper
        class="h-full swiper"
        ref="swiperComponent"
        :options="swiperOption"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <Step :isLastStep="slide.isLast" @next="nextSlide" @last="lastSlide">
            <template v-slot:introImage>
              <component :is="slide.introImage"></component>
            </template>
            <template v-slot:heading>
              {{ slide.heading }}
            </template>
            <template v-slot:content>
              {{ slide.content }}
            </template>
          </Step>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import Step from '@/components/introduction/Step.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Introduction',
  components: {
    Swiper,
    SwiperSlide,
    Step
  },
  data() {
    return {
      currentIndex: 0,
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      slides: [
        {
          introImage: require('@/assets/icons/desktop.svg'),
          heading: 'Welcome to Scarlett',
          content: 'Manage all your savings groups! It’s simple and easy!',
          isLast: false
        },
        {
          introImage: require('@/assets/icons/idea.svg'),
          heading: 'Nice and Tidy Cash Portfolio!',
          content:
            'Keep accurate records of your cash deposits, withdraws, and entire portfolio.',
          isLast: false
        },
        {
          introImage: require('@/assets/icons/mobile.svg'),
          heading: 'Keep Track of Performance!',
          content:
            'Track overall group performance with beautiful reporting dashboards.',
          isLast: false
        },
        {
          introImage: require('@/assets/icons/social.svg'),
          heading: 'Your Safety is Our Top Priority',
          content:
            'Our top-notch security features will keep you completely safe.',
          isLast: true
        }
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiperComponent.$swiper;
    }
  },
  methods: {
    nextSlide() {
      if (this.currentIndex <= this.slides.length - 1) {
        this.currentIndex += 1;
        this.swiper.slideTo(this.currentIndex, 1000, false);
      }
    },
    lastSlide() {
      // redirect to the next view
      console.log('last');
    }
  }
};
</script>
