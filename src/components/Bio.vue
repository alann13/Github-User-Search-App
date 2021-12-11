<script setup>
defineProps({
  bio?: String,
})
</script>

<template>
  <div v-if="githubProfile.bio" class="text-base mb-3 text-altBlue">{{ githubProfile.bio }}</div>
  <div v-else class="text-base mb-3 text-altBlue">Bio is not available.</div>
</template>
