<template>
  <div class="flex flex-col items-center bg-background">
    <BgLogin />
    <div
      class="flex flex-col items-center justify-center flex-1 w-full bg-white lg:w-1/2 rounded-xl"
    >
      <div class="mt-8">
        <AuthButton />
      </div>
      {{ name }}
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
import * as firebase from 'firebase/app';

export default {
  name: 'Login',
  components: {
    AuthButton,
    BgLogin
  },
  data() {
    return {
      name: ''
    };
  },
  created() {
    let self = this;
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          console.log(token);
          // ...
        }
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        self.name = user.displayName;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
