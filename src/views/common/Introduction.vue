<template>
  <div>
    <div class="box-border h-full bg-background">
      <p class="absolute w-full text-right p-2 text-primary-blue">Skip</p>
      <swiper
        class="swiper h-full"
        ref="swiperComponent"
        :options="swiperOption"
      >
        <swiper-slide>
          <Step>
            <template v-slot:introImage>
              <BgDesktop />
            </template>
            <template v-slot:heading>
              Welcome to Scarlett
            </template>
            <template v-slot:content>
              Manage all your savings groups! It’s simple and easy!
            </template>
          </Step>
        </swiper-slide>
        <swiper-slide>
          <Step>
            <template v-slot:introImage>
              <BgIdea />
            </template>
            <template v-slot:heading>
              Nice and Tidy Cash Portfolio!
            </template>
            <template v-slot:content>
              Keep accurate records of your cash deposits, withdraws, and entire
              portfolio.
            </template>
          </Step>
        </swiper-slide>
        <swiper-slide>
          <Step>
            <template v-slot:introImage>
              <BgMobile />
            </template>
            <template v-slot:heading>
              Keep Track of Performance!
            </template>
            <template v-slot:content>
              Track overall group performance with beautiful reporting
              dashboards.
            </template>
          </Step>
        </swiper-slide>
        <swiper-slide>
          <Step :isLastStep="true">
            <template v-slot:introImage>
              <BgSocial />
            </template>
            <template v-slot:heading>
              Your Safety is Our Top Priority
            </template>
            <template v-slot:content>
              Our top-notch security features will keep you completely safe.
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

import BgDesktop from '@/assets/icons/desktop.svg';
import BgIdea from '@/assets/icons/idea.svg';
import BgMobile from '@/assets/icons/mobile.svg';
import BgSocial from '@/assets/icons/social.svg';

export default {
  name: 'Introduction',
  components: {
    Swiper,
    SwiperSlide,
    Step,
    BgDesktop,
    BgIdea,
    BgMobile,
    BgSocial
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  }
};
</script>
