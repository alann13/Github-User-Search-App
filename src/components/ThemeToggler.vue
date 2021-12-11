<script>
import { mapState } from 'vuex'
export default {
  name: 'ThemeToggler',
  computed: mapState({
    isDarkTheme: ({ isDarkTheme }) => isDarkTheme,
  }),
  methods: {
    toggleTheme() {
      this.$store.commit('toggleTheme', !this.isDarkTheme)
    },
  },
}
</script>

<template>
  <div class="flex dark:text-white cursor-pointer" v-if="isDarkTheme" @click="toggleTheme">
    Light&nbsp; <img src="../assets/icon-sun.svg" alt="sun icon" />
  </div>
  <div class="flex cursor-pointer" v-else @click="toggleTheme">
    Dark&nbsp; <img src="../assets/icon-moon.svg" alt="moon icon" />
  </div>
</template>
