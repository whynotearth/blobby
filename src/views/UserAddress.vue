<template>
  <div>
    <transition name="slide-in-bottom">
      <div
        class="fixed flex flex-col w-screen h-screen top-0 left-0 z-50 bg-white"
        v-if="openMapArea"
      >
        <div
          class="float-right p-4 text-black self-end cursor-pointer"
          @click="openMapArea = false"
        >
          <IconClose />
        </div>
        <SelectFromMap
          @coordinates="getCoordinates"
          @place-name="placeName = $event"
          @save-clicked="saveUserCoordinates"
        />
      </div>
    </transition>
    <div class="w-full h-full px-4 space-y-3">
      <p class="text-2xl font-semibold">My addresses</p>
      <div class="" v-if="!$apollo.loading && userAddresses.user">
        <div
          v-for="address in userAddresses.user.addresses"
          :key="address.id"
          class="flex flex-row space-x-4 items-center"
        >
          <input type="radio" class="w-5 h-5" :value="address.place_name" />
          <label class="text-lg">{{ address.place_name }}</label>
        </div>
      </div>
      <div v-else>
        <h3>
          No address found.
        </h3>
      </div>
    </div>
    <div
      class="fixed bottom-0 w-full items-center uppercase p-4 space-y-3 bg-white shadow-4dp"
    >
      <button
        class="w-full text-white font-semibold focus:outline-none p-2 bg-green-600"
        @click="openMapArea = true"
      >
        Add More addresses
      </button>
    </div>
  </div>
</template>

<script>
import GET_ADDRESS from '@/graphql/address/GetAddress.gql';
import SAVE_USER_COORDINATES from '@/graphql/address/SaveUserCoordinates.gql';
import SelectFromMap from '@/components/SelectFromMap.vue';
import IconClose from '@/assets/icons/close.svg';
import { mapGetters } from 'vuex';

export default {
  name: 'UserAddress',
  components: {
    SelectFromMap,
    IconClose
  },
  data() {
    return {
      userAddresses: {},
      placeName: '',
      latLng: {
        latitude: 0,
        longitude: 0
      },
      openMapArea: false,
      loadingQueriesCount: 0
    };
  },
  apollo: {
    userAddresses: {
      query: GET_ADDRESS,
      variables() {
        return {
          id: this.getUserId
        };
      },
      update(data) {
        return data;
      }
    }
  },
  computed: {
    ...mapGetters('user', ['getId']),
    getUserId() {
      return localStorage.getItem('userId');
    }
  },
  methods: {
    getCoordinates(latLng) {
      this.latLng = { ...latLng };
    },
    saveUserCoordinates() {
      let self = this;
      this.$apollo.mutate({
        mutation: SAVE_USER_COORDINATES,
        variables: {
          input: {
            data: {
              user: this.getUserId,
              place_name: this.placeName,
              user_location: this.latLng
            }
          }
        },
        update() {
          self.openMapArea = false;
          self.$apollo.queries.userAddresses.refetch();
        },
        loadingKey: 'loadingQueryCount'
      });
    }
  }
};
</script>

<style scoped>
.slide-in-bottom-enter-active {
  animation: slide-in-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes slide-in-bottom {
  0% {
    transform: translateZ(-1400px) translateY(800px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
</style>
