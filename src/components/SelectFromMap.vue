<template>
  <div class="w-full">
    <div class="w-full mb-2">
      <FindLocation
        @onCancel="option = 'Enter location manually'"
        v-if="option === 'Share location'"
        v-model="locationFromComponent"
      />
      <div class="flex flex-col space-y-4 px-4">
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="option"
            value="Share location"
            class="p-5"
          />
          <label>Share location</label>
        </div>
        <div class="flex items-center space-x-2">
          <input
            type="radio"
            v-model="option"
            value="Enter location manually"
            class="p-5"
          />
          <label>Enter location manually</label>
        </div>
      </div>
    </div>
    <div v-if="option === 'Share location'">
      <div v-if="embedUrl.length > 0" class="w-full">
        <div class="flex items-center justify-center">
          <GmapMap
            class="w-full h-screen border-none rounded mt-2"
            ref="gmap"
            :center="{
              lat: locationFromComponent.latitude,
              lng: locationFromComponent.longitude
            }"
            :zoom="12"
            :options="mapOptions"
            @idle="idle"
          >
            <GmapMarker
              :key="index"
              v-for="(m, index) in markers"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              :maxZoom="12"
              @click="center = m.position"
            />
          </GmapMap>
          <div
            class="absolute flex flex-col z-50 bottom-0 bg-white h-1/2 p-4 space-y-3"
          >
            <h4 class="text-xl font-semibold">
              Select your location from the map
            </h4>
            <input
              type="text"
              class="border-b border-green-600"
              placeholder="Place name e.g. Home"
              required
              @blur="$emit('place-name', $event.target.value)"
            />
            <p>
              Move the map pin to find your location and select the delivery
              address.
            </p>
            <p></p>
            <button
              class="p-2 w-full text-white rounded-md bg-green-600 self-center"
              @click="$emit('save-clicked')"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        class="px-2 flex flex-col mt-4 space-y-4 p-4 rounded-lg shadow bg-secondary"
      >
        <input
          v-model="buildingName"
          type="text"
          label="Building Name"
          placeholder="Building Name"
        />
        <input
          v-model="$v.street.$model"
          type="text"
          label="Street Address"
          placeholder="Street name and number"
          :error="$v.street.$dirty && !$v.street.required"
        />
        <span
          v-if="$v.street.$dirty && !$v.street.required"
          class="text-xs text-red-600"
        >
          Street address is required
        </span>

        <input
          v-model="$v.town.$model"
          type="text"
          label="City"
          placeholder="Town or City Area"
          :error="$v.town.$dirty && !$v.town.required"
        />
        <span
          v-if="$v.town.$dirty && !$v.town.required"
          class="text-xs text-red-600"
        >
          Town/City is required
        </span>
        <input v-model="floor" type="text" placeholder="Floor" label="Floor" />
        <input
          v-model="apartment"
          type="text"
          placeholder="Apartment #"
          label="Apartment #"
        />
        <input
          v-model="parking"
          type="text"
          placeholder="Where to park"
          label="Where to park"
        />
      </div>
      <span
        class="text-sm text-red-600"
        v-if="$v.$invalid"
        v-show="submitError"
      >
        You are missing required fields, please fill out "Street Address" and
        "Town/City".
      </span>
    </div>
    <span class="text-red-600" v-if="registerError">
      {{ registerError }}
    </span>
    <!-- <CheckoutNavBar
      nextStepText="Set delivery time ►"
      @previousStep="decrementPage"
      @nextStep="submit"
    /> -->
  </div>
</template>

<script>
// import MaterialInput from '@/components/inputs/MaterialInput.vue';
// import CheckoutNavBar from '@/components/forms/CheckoutNavBar.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { required } from 'vuelidate/lib/validators';
import FindLocation from '@/components/inputs/FindLocation.vue';
export default {
  name: 'CustomerAddress',
  components: {
    // MaterialInput,
    // CheckoutNavBar,
    FindLocation
  },
  data() {
    return {
      submitError: false,
      registerError: '',
      embedUrl: '',
      locationFromComponent: {},
      markers: [
        {
          position: {
            lat: null,
            lng: null
          }
        }
      ],
      mapType: 'Map',
      mapOptions: {
        zoomControl: false,
        streetViewControl: false,
        fullscreenControlOptions: true,
        disableDefaultUI: false,
        mapTypeControl: false
      }
    };
  },
  mounted() {},
  validations: {
    street: {
      required
    },
    town: {
      required
    }
  },
  computed: {
    ...mapGetters('form', [
      'getTown',
      'getFloor',
      'getApartment',
      'getParking',
      'getBuildingName',
      'getStreet',
      'getAddressOption',
      'getGoogleLocation',
      'page'
    ]),
    option: {
      get() {
        return this.getAddressOption;
      },
      set(value) {
        this.updateAddressOption(value);
      }
    },
    mapTypeId: function() {
      if (this.mapType === 'Map') {
        return 'terrain';
      } else {
        return 'satellite';
      }
    },
    town: {
      get() {
        return this.getTown;
      },
      set(value) {
        this.updateTown(value);
      }
    },
    floor: {
      get() {
        return this.getFloor;
      },
      set(value) {
        this.updateFloor(value);
      }
    },
    street: {
      get() {
        return this.getStreet;
      },
      set(value) {
        this.updateStreet(value);
      }
    },
    buildingName: {
      get() {
        return this.getMapId;
      },
      set(value) {
        this.updateBuildingName(value);
      }
    },
    parking: {
      get() {
        return this.getParking;
      },
      set(value) {
        this.updateParking(value);
      }
    },
    apartment: {
      get() {
        return this.getApartment;
      },
      set(value) {
        this.updateApartment(value);
      }
    },
    location: {
      get() {
        return this.getGoogleLocation;
      },
      set(value) {
        this.updateGoogleLocation(value);
      }
    }
  },
  methods: {
    ...mapActions('form', ['register']),
    ...mapMutations('form', [
      'updateTown',
      'updateFloor',
      'updateStreet',
      'updateBuildingName',
      'updateParking',
      'updateApartment',
      'updateAddressOption',
      'updateGoogleLocation',
      'pageChange'
    ]),
    idle() {
      var coordString = this.$refs.gmap.$mapObject
        .getCenter()
        .toString()
        .slice(1, -1)
        .replace(/ /g, '');
      var commaPos = coordString.indexOf(',');
      this.locationFromComponent.latitude = parseFloat(
        coordString.substring(0, commaPos)
      );
      this.locationFromComponent.longitude = parseFloat(
        coordString.substring(commaPos + 1, coordString.length)
      );
    },
    submit() {
      if (this.option !== 'Share location') {
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitError = true;
          return false;
        }
      }
      this.register()
        .then(() => {
          this.pageChangeWrapper(3);
        })
        .catch(error => {
          this.registerError = error.response.data[0].description;
        });
    },
    pageChangeWrapper(page) {
      this.$emit('pageChange', page);
      this.pageChange(page);
    },
    decrementPage() {
      const pageToGo = this.page - 1;
      this.pageChangeWrapper(pageToGo);
    }
  },
  watch: {
    locationFromComponent: {
      deep: true,
      handler(value) {
        const { latitude, longitude } = value;
        if (latitude && longitude) {
          this.$emit('coordinates', {
            latitude: latitude,
            longitude: longitude
          });
          this.markers[0].position.lat = latitude;
          this.markers[0].position.lng = longitude;
          this.updateGoogleLocation(
            `https://www.google.com/maps/search/?api=1&query=${this.markers[0].position.lat},${this.markers[0].position.lng}`
          );
          this.embedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.VUE_APP_MAPS_API_KEY}&q=${this.markers[0].position.lat},${this.markers[0].position.lng}`;
        }
      }
    }
  }
};
</script>

<style scoped>
input[type='text'] {
  @apply outline-none;
}

input[type='text']:focus {
  @apply border-b;
  @apply border-green-600;
}
</style>
