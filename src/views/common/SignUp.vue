<template>
  <div class="flex flex-col items-center bg-background">
    <BgOffice />
    <div
      class="flex flex-col items-center justify-center flex-1 w-full bg-white lg:w-1/2 rounded-xl"
    >
      <div class="w-full px-6 md:w-1/2 lg:w-2/3">
        <MaterialInput label="First Name" />
        <MaterialInput label="Last Name" />
        <MaterialInput label="Username" />
        <MaterialInput label="Email" />
      </div>
      <div class="px-6 mt-8 text-center">
        <Button
          title="Let's get started"
          padding="px-4 py-3"
          :to="{ name: 'Introduction' }"
        />
        <p class="mt-4 tg-body-mobile">
          Already have an account?
          <router-link :to="{ name: 'Login' }" class="text-primary-blue">
            Login
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BgOffice from '@/assets/icons/office.svg';
import Button from '@/components/inputs/Button.vue';
import MaterialInput from '@/components/inputs/MaterialInput.vue';

export default {
  components: {
    BgOffice,
    Button,
    MaterialInput
  }
};
</script>
