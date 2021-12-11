<script>
export default {
  name: 'LabelWithIcon',
  props: {
    icon: String,
    label: String,
  },
}
</script>

<template>
  <div class="my-2 flex text-tiny md:w-1/2 md:text-base dark:text-white">
    <img :src="icon" alt="icon" />&nbsp;
    <div v-if="label">{{ label }}</div>
    <div v-else>Not Available</div>
  </div>
</template>
