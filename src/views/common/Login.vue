<template>
  <div class="flex flex-col">
    <div class="flex-1 flex flex-col bg-background items-center">
      <BgLogin />
      <div
        class="flex-1 w-full bg-white flex flex-col items-center justify-evenly rounded-t-xl"
      >
        <MaterialInput label="Phone Number" />
        <div class="sm:w-full md:w-1/2 text-center">
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
