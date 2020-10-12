<template>
  <div>
    <div
      class="py-3"
      v-for="({ name }, index) in socialMediaProviders"
      :key="index"
    >
      <Button
        :title="`Log In With ${name}`"
        class="py-3"
        @clicked="oauth(name)"
      >
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/inputs/Button.vue';
// import facebookLogo from '@/assets/facebook2.png';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'LinkAccount',
  components: {
    Button
  },
  data() {
    return {
      socialMediaProviders: [
        {
          name: 'facebook'
        }
      ]
    };
  },
  created() {
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
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    async oauth() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  }
};
</script>
