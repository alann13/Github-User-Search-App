<script>
export default {
  name: 'SearchStatus',
  props: {
    statusText: String,
  },
}
</script>

<template>
  <div class="px-8 py-5">{{ statusText }}</div>
</template>
