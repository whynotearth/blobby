<template>
  <div>
    <nav class="flex w-full fixed bottom-0 bg-transparent z-30">
      <div class="flex flex-auto">
        <div class="w-full">
          <div class="flex relative bg-primary">
            <ul
              class="max-w-4xl mx-auto wrapper flex-auto flex text-left justify-around items-center menu list-none tg-caption-mobile"
            >
              <li class="link-item text-opacity-high">
                <router-link class="navigation--link block" :to="{}" exact>
                  <IconHome class="m-auto mb-1 w-6 h-6 opacity-75" />
                  <span>Home</span>
                </router-link>
              </li>
              <li class="link-item text-opacity-high -mr-4">
                <router-link class="navigation--link block" :to="{}" exact>
                  <IconSearch class="m-auto mb-1 w-6 h-6 opacity-75" />
                  <span>Discover</span>
                </router-link>
              </li>

              <li class="link-item text-opacity-high z-30">
                <a tabindex="0" class="flex items-center cursor-pointer">
                  <div
                    class="-mt-8 h-14 w-14 rounded-full flex items-center justify-center mx-auto bg-button 
                    shadow-2dp"
                  >
                    <IconCamera class="m-auto" />
                  </div>
                </a>
              </li>

              <li class="link-item text-opacity-high -ml-4">
                <router-link class="navigation--link block" :to="{}" exact>
                  <IconShoppingCart class="m-auto mb-1 w-6 h-6 opacity-75" />
                  <span>Cart</span>
                </router-link>
              </li>

              <li class="link-item text-opacity-high">
                <router-link class="navigation--link block" :to="{}" exact>
                  <IconUserCircle class="m-auto mb-1 w-6 h-6 opacity-75" />
                  <span>Account</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import IconCamera from '@/assets/camera.svg';
import IconHome from '@/assets/home.svg';
import IconSearch from '@/assets/search.svg';
import IconUserCircle from '@/assets/user.svg';
import IconShoppingCart from '@/assets/shopping-cart.svg';
// import DrawerUpload from '@/components/DrawerUpload';
// import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NavigationBottom',
  data: () => ({
    isOpenDrawerUpload: false
  }),
  components: {
    // DrawerUpload,
    IconHome,
    IconCamera,
    IconSearch,
    IconUserCircle,
    IconShoppingCart
  }
  // methods: {
  //   ...mapActions('uploader', ['isOpenDrawerUploadUpdate'])
  // },
  // computed: {
  //   ...mapGetters('uploader', ['isOpenDrawerUploadGet'])
  // }
};
</script>

<style scoped>
.wrapper {
  padding: 6px 0;
}

.navigation--link {
  @apply opacity-medium;
}

.navigation--link svg path {
  @apply opacity-100;
}

.router-link-active {
  @apply opacity-100;
}

.router-link-active svg path {
  fill-opacity: 1;
}
.link-item {
  color: #78839c;
  @apply text-center;
}
</style>
