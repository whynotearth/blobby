<template>
  <div class="w-screen h-screen bg-primary-blue">
    <div class="w-full h-full flex flex-col items-center justify-around">
      <div class="w-full flex flex-col items-center">
        <IconLogo />
        <p class="mt-8 text-gray tg-h3-desktop">Welcome To</p>
        <p class="text-white tg-h2-desktop">Scarlett</p>
      </div>
      <div class="flex flex-col">
        <Button
          :to="{ name: 'Login' }"
          title="Login"
          buttonBg="bg-white"
          padding="px-4 py-3"
          textColor="text-primary-blue"
        />
        <p class="mt-4 text-white">Don't have an account? Sign Up</p>
      </div>
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
