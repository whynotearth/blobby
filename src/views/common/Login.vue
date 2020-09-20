<template>
  <div class="flex flex-col items-center bg-background">
    <BgLogin />
    <div
      class="w-full flex-1 flex flex-col justify-center items-center 
      md:w-1/2 lg:w-2/3 px-6 bg-white rounded-t-xl"
    >
      <div class="w-full md:w-1/2">
        <MaterialInput label="Phone Number" />
      </div>
      <div class="mt-8">
        <Button
          title="Request OTP"
          padding="px-4 py-3"
          v-on:clicked="requestOtp"
        />
        <p class="mt-4 tg-body-mobile">
          Don't have an account?
          <span class="text-primary-blue">Sign Up</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import BgLogin from '@/assets/icons/login.svg';
import Button from '@/components/inputs/Button.vue';

import router from '@/router';

export default {
  name: 'Login',
  components: {
    Button,
    MaterialInput,
    BgLogin
  },
  methods: {
    requestOtp() {
      router.push({ name: 'Verification' });
    }
  }
};
</script>
