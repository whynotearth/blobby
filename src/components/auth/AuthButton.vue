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

  methods: {
    async oauth() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithRedirect(provider);
      localStorage.setItem('isReload', true);
    }
  }
};
</script>
