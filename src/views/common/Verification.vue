<template>
  <div class="flex flex-col">
    <div class="flex-1 flex flex-col bg-background items-center">
      <p class="text-gray tg-desktop-story-titles">
        Please enter your OTP to proceed
      </p>
      <div class="mx-6 mt-16 p-4 bg-white rounded-xl text-center">
        <p>Enter OTP</p>
        <div class="flex flex-row justify-evenly">
          <DigitInput textColor="text-primary-blue" @keyup="check" />
          <DigitInput textColor="text-primary-blue" @keyup="check" />
          <DigitInput textColor="text-primary-blue" @keyup="check" />
          <DigitInput textColor="text-primary-blue" @keyup="check" />
        </div>
      </div>
      <div class="w-full px-6 mt-4">
        <Button title="Verify" padding="px-4 py-3" @clicked="requestOtp" />
      </div>
    </div>
  </div>
</template>

<script>
import DigitInput from '@/components/inputs/DigitInput.vue';
import Button from '@/components/inputs/Button.vue';

export default {
  name: 'Verification',
  components: {
    DigitInput,
    Button
  },
  methods: {
    check(e) {
      console.log(e);
    }
  }
};
</script>
