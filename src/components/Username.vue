<script>
export default {
  name: 'Username',
  props: {
    name: String,
    login: String,
  },
}
</script>

<template>
  <div>
    <h2 v-show="name" class="font-bold text-base sm:text-2.5xl mb-2">{{ name }}</h2>
    <h4 class="text-tiny text-blue xl:text-base">{{ login }}</h4>
  </div>
</template>
