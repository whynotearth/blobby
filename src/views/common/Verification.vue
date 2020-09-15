<template>
  <div class="flex flex-col">
    <div class="flex-1 flex flex-col bg-background items-center">
      <p class="text-gray tg-desktop-story-titles">
        Please enter your OTP to proceed
      </p>
      <div
        class="mx-6 mt-16 p-4 md:w-1/2 lg:w-1/4 bg-white rounded-xl text-center"
      >
        <p>Enter OTP</p>
        <div class="flex flex-row justify-evenly" ref="otpContainer">
          <DigitInput
            textColor="text-primary-blue"
            @keyup="check"
            @keyup.delete="clearInput"
          />
          <DigitInput
            textColor="text-primary-blue"
            @keyup="check"
            @keyup.delete="clearInput"
          />
          <DigitInput
            textColor="text-primary-blue"
            @keyup="check"
            @keyup.delete="clearInput"
          />
          <DigitInput
            textColor="text-primary-blue"
            @keyup="check"
            @keyup.delete="clearInput"
          />
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:w-1/4 px-6 mt-4">
        <Button title="Verify" padding="px-4 py-3" />
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
      let inputs = this.$refs.otpContainer.childNodes;
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].childNodes[0].isSameNode(e.target) && e.target.value) {
          if (i < inputs.length - 1) {
            inputs[i + 1].childNodes[0].focus();
          }
        }
      }
    },
    clearInput(e) {
      let inputs = this.$refs.otpContainer.childNodes;
      for (var i = inputs.length - 1; i >= 0; i--) {
        if (inputs[i].childNodes[0].isSameNode(e.target)) {
          if (i > 0) {
            inputs[i - 1].childNodes[0].focus();
          }
        }
      }
    }
  }
};
</script>
