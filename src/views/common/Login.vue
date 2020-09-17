<template>
  <div class="flex flex-col items-center bg-background">
    <BgLogin />
    <div
      class="flex-1 flex flex-col justify-around p-4 w-full lg:w-1/2 bg-white rounded-xl"
    >
      <MaterialInput label="Phone Number" />
      <div class="px-16">
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
