<template>
  <div class="flex flex-col items-center justify-center bg-background">
    <BgLogin />
    <div
      class="flex flex-col items-center justify-center flex-1 w-full bg-white lg:w-1/2 rounded-xl"
    >
      <AuthButton />
    </div>
    <div
      class="absolute w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-30"
      v-if="isLoading"
    >
      <BaseSpinner borderColor="border-primary-blue" />
    </div>
  </div>
</template>

<script>
import BgLogin from '@/assets/icons/login.svg';
import AuthButton from '@/components/auth/AuthButton.vue';
import BaseSpinner from '@/components/BaseSpinner.vue';
import * as firebase from 'firebase/app';

export default {
  name: 'Login',
  components: {
    AuthButton,
    BgLogin,
    BaseSpinner
  },
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    let self = this;
    if (localStorage.getItem('isReload')) {
      self.isLoading = true;
    }
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          localStorage.setItem('accessToken', token);
          var user = result.user;
          localStorage.setItem('userData', user);
          self.$router.push({ name: 'Introduction' });
          // ...
        }
        // The signed-in user info.
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  beforeDestroy() {
    localStorage.removeItem('isReload');
  }
};
</script>
