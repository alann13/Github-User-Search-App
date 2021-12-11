<script setup>
defineProps({
  bio: String,
})
</script>

<template>
  <div v-if="bio" class="text-base mb-3 text-altBlue">{{ bio }}</div>
  <div v-else class="text-base mb-3 text-altBlue">Bio is not available.</div>
</template>
