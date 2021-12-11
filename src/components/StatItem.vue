<script>
export default {
  name: 'StatItem',
  props: {
    statLabel: String,
    statCount: Number,
  },
}
</script>

<template>
  <div class="text-xxs mb-2 text-altBlue dark:text-white">{{ statLabel }}</div>
  <div class="text-base font-bold text-black dark:text-white">{{ statCount }}</div>
</template>
