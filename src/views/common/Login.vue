<template>
  <div class="flex flex-col items-center bg-background">
    <BgLogin />
    <div
      class="flex flex-col items-center justify-center flex-1 w-full bg-white lg:w-1/2 rounded-xl"
    >
      <div class="w-full md:w-1/2">
        <MaterialInput
          type="tel"
          label="Phone Number"
          pattern='pattern="[0-9]*'
          v-model="$v.phoneNumber.$model"
          :error="
            $v.phoneNumber.$dirty &&
              (!$v.phoneNumber.required || !$v.phoneNumber.minLength)
          "
        >
          <span
            v-if="$v.phoneNumber.$dirty && !$v.phoneNumber.required"
            class="text-xs text-red-600"
          >
            Phone number is required
          </span>
          <span v-if="!$v.phoneNumber.minLength" class="text-xs text-red-600">
            Please enter a valid phone number
          </span>
        </MaterialInput>
      </div>
      <div class="mt-8">
        <Button
          title="Request OTP"
          padding="px-4 py-3"
          v-on:clicked="requestOtp"
        />
        <p class="mt-4 tg-body-mobile">
          Don't have an account?
          <router-link :to="{ name: 'SignUp' }" class="text-primary-blue">
            Sign Up
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialInput from '@/components/inputs/MaterialInput.vue';
import BgLogin from '@/assets/icons/login.svg';
import Button from '@/components/inputs/Button.vue';

import router from '@/router';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'Login',
  components: {
    Button,
    MaterialInput,
    BgLogin
  },
  data() {
    return {
      phoneNumber: ''
    };
  },
  validations: {
    phoneNumber: {
      required,
      minLength: minLength(7)
    }
  },
  methods: {
    requestOtp() {
      router.push({ name: 'Verification' });
    }
  }
};
</script>
