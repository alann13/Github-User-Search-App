<script>
export default {
  name: 'PageTitle',
  props: {
    title: String,
  },
}
</script>

<template>
  <h1 class="font-bold text-2.5xl text-title dark:text-white">{{ title }}</h1>
</template>
