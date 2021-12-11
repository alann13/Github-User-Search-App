<script>
export default {
  name: 'Container',
}
</script>

<template>
  <div
    class="
      container
      h-screen
      m-auto
      px-4
      py-6
      md:max-w-575
      md2:flex md2:flex-col md2:justify-center md2:items-center
      xl:max-w-730
    "
  >
    <slot></slot>
  </div>
</template>
