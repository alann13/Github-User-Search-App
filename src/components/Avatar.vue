<script>
export default {
  name: 'Avatar',
  props: {
    imgSrc: String,
    imgAlt: String,
  },
}
</script>

<template>
  <img class="rounded-full w-full" v-bind:src="imgSrc" v-bind:alt="imgAlt" />
</template>
