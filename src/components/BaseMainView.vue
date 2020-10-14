<template>
  <div class="w-full h-full px-8">
    <div>
      <h2 class="text-3xl font-bold"><slot name="heading"></slot></h2>
    </div>
    <div
      class="flex flex-row justify-evenly items-center border-b-2 border-light-gray"
    >
      <div>
        <IconSearch />
      </div>
      <input placeholder="Search food you like" class="flex-grow px-2" />
      <div>
        <IconFilter />
      </div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
import IconSearch from '@/assets/icons/search.svg';
import IconFilter from '@/assets/icons/icon_filter.svg';
export default {
  name: 'BaseMainView',
  components: {
    IconSearch,
    IconFilter
  }
};
</script>
