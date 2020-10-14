<template>
  <div
    class="w-full h-full flex flex-col items-center justify-around  bg-primary-blue"
  >
    <div class="w-full flex flex-col items-center">
      <IconLogo />
      <p class="mt-8 text-gray tg-h3-desktop">Welcome To</p>
      <p class="text-white tg-h2-desktop">Scarlett</p>
    </div>
    <div class="sm:w-1/12">
      <Button
        :to="{ name: 'Login' }"
        title="Login"
        buttonBg="bg-white"
        padding="px-4 py-3"
        textColor="text-primary-blue"
        :isRipple="false"
      />
      <!-- <p class="mt-4 text-white">
        Don't have an account?
        <router-link :to="{ name: 'SignUp' }">
          Sign Up
        </router-link>
      </p> -->
    </div>
  </div>
</template>

<script>
import Button from '@/components/inputs/Button.vue';

import IconLogo from '@/assets/icons/logo.svg';

export default {
  name: 'Splash',
  components: {
    Button,
    IconLogo
  }
};
</script>
