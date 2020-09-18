<template>
  <div class="h-full flex flex-col items-center">
    <div>
      <slot name="introImage" />
    </div>
    <div
      class="flex-grow flex flex-col items-center justify-evenly p-4 w-full lg:w-1/2 bg-white rounded-xl text-center"
    >
      <div class="text-center">
        <div class="text-midnight-blue tg-h3-desktop">
          <slot name="heading" />
        </div>
        <div class="text-gray mt-8">
          <slot name="content" />
        </div>
      </div>
      <div
        class="w-full md:w-1/2 lg:w-2/3 px-6 mt-4 text-center"
        v-if="!isLastStep"
      >
        <Button
          title="Let's get started"
          padding="px-4 py-3"
          buttonBg="bg-white"
          textColor="text-primary-blue"
          border="border border-primary-blue"
        />
      </div>
      <div class="px-16" v-else>
        <Button title="Let's get started" padding="px-4 py-3" />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/inputs/Button.vue';
export default {
  name: 'Step',
  props: {
    isLastStep: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Button
  }
};
</script>
