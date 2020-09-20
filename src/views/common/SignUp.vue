<template>
  <div class="box-border flex flex-col bg-background items-center">
    <BgOffice />
    <div
      class="flex-1 flex flex-col justify-center items-center w-full lg:w-1/2 bg-white rounded-xl"
    >
      <div class="w-full md:w-1/2 lg:w-2/3 px-6">
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
          <span class="text-primary-blue">Login</span>
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
