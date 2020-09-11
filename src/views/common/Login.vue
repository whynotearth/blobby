<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full flex flex-col items-center bg-backgroud">
      <BaseHeader>
        <template #content>
          Welcome Back!
        </template>
      </BaseHeader>
      <div class="mt-8 p-4">
        <BgLogin />
      </div>
      <div
        class="w-full h-full bg-white rounded-t-xl flex flex-col items-center justify-evenly"
      >
        <MaterialInput
          label="Mobile Number"
          borderColor="border-primary-blue"
        />
        <div class="flex flex-col">
          <Button title="Request OTP" padding="px-2 py-2" />
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
import BaseHeader from '@/components/BaseHeader.vue';
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import BgLogin from '@/assets/icons/login.svg';
import Button from '@/components/inputs/Button.vue';

export default {
  name: 'Login',
  components: {
    BaseHeader,
    Button,
    MaterialInput,
    BgLogin
  }
};
</script>
