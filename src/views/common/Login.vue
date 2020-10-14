<template>
  <div class="flex flex-col items-center justify-center bg-background">
    <BgLogin />
    <div
      class="flex flex-col items-center justify-center flex-1 w-full bg-white lg:w-1/2 rounded-xl"
    >
      <AuthButton />
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
  },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>
