<template>
  <div class="flex flex-col items-center h-full">
    <div>
      <slot name="introImage" />
    </div>
    <div
      class="flex flex-col items-center flex-grow w-full p-4 text-center bg-white justify-evenly lg:w-1/2 rounded-xl"
    >
      <div class="text-center">
        <div class="text-midnight-blue tg-h3-desktop">
          <slot name="heading" />
        </div>
        <div class="mt-8 text-gray">
          <slot name="content" />
        </div>
      </div>
      <div
        class="w-full px-6 mt-4 text-center md:w-1/2 lg:w-2/3"
        v-if="!isLastStep"
      >
        <Button
          title="Let's get started"
          padding="px-4 py-3"
          buttonBg="bg-white"
          textColor="text-primary-blue"
          border="border border-primary-blue"
          @clicked="$emit('next')"
        />
      </div>
      <div class="w-full px-6 mt-4 text-center md:w-1/2 lg:w-2/3" v-else>
        <Button
          title="Let's get started"
          padding="px-4 py-3"
          @clicked="$emit('last')"
        />
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
