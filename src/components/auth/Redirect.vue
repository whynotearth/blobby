<template>
  <div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Redirect',
  data() {
    return {
      text: ''
    };
  },
  mounted() {
    let providerName = this.$route.params.providerName;
    fetch(
      `${process.env.VUE_APP_API_URL}/auth/${providerName}/callback${window.location.search}`
    )
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('jwt', res.jwt);
        this.saveUser(res.user);
        this.text = 'Logged in successfully. Redirecting in 3 seconds.';
        setTimeout(() => this.$router.push({ name: 'Introduction' }), 3000);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    ...mapActions('user', ['saveUser'])
  }
};
</script>
