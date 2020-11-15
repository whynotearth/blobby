<template>
  <div
    class="absolute top-0 left-0 w-1/2 h-screen flex flex-row bg-green-600 shadow-12dp"
  >
    <div class="p-4 space-y-4">
      <h3 class="font-semibold text-2xl text-white">Fooduken</h3>
      <ul class="space-y-4 text-lg text-white text-opacity-95">
        <li class="cursor-pointer" @click="routeTo('Home')">
          Home
        </li>
        <li class="cursor-pointer" @click="routeTo('ManageAddress')">
          Manage Address Book
        </li>
        <li>
          Profile
        </li>
        <li>
          Settings
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  methods: {
    routeTo(to) {
      this.$emit('close-side-menu');
      this.$router.push({ name: to });
    }
  }
};
</script>
