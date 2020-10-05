<template>
  <div class="flex flex-col items-center bg-background">
    <BgLogin />
    <div
      class="flex flex-col items-center justify-center flex-1 w-full bg-white lg:w-1/2 rounded-xl"
    >
      <div class="mt-8">
        <AuthButton />
      </div>
      <div class="mt-8">
        <p class="tg-body-mobile">
          Don't have an account?
          <router-link :to="{ name: 'SignUp' }" class="text-primary-blue">
            Sign Up
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BgLogin from '@/assets/icons/login.svg';
import AuthButton from '@/components/auth/AuthButton.vue';

export default {
  name: 'Login',
  components: {
    AuthButton,
    BgLogin
  }
};
</script>
