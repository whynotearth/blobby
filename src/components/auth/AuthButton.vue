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
import { mapGetters, mapMutations } from 'vuex';
// import facebookLogo from '@/assets/facebook2.png';

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
  computed: {
    ...mapGetters('auth', {
      oauthLink: 'oauth'
    })
  },
  methods: {
    ...mapMutations('auth', ['updateProvider']),
    async oauth(provider) {
      await this.updateProvider(provider);
      const redirectUrl = await this.oauthLink;
      window.location.assign(redirectUrl);
    }
  }
};
</script>
