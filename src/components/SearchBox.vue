<script>
import axios from 'axios'
import { mapState } from 'vuex'
import { GITHUB_BASE_URL } from '../utils/constants'

export default {
  name: 'SearchBox',
  computed: mapState({
    githubUser: (state) => state.githubUser,
  }),

  methods: {
    handleSearch(event) {
      event.preventDefault()

      axios
        .get(`${GITHUB_BASE_URL}/users/${this.githubUser}`)
        .then(({ data }) => {
          this.$store.commit('updateGithubProfile', data)
        })
        .catch((error) => console.error(error))
    },
    handleInputChange(event) {
      event.preventDefault()

      this.$store.commit('updateGithubUser', event.target.value)
    },
  },
}
</script>

<template>
  <form @submit="handleSearch">
    <fieldset class="relative">
      <label for="search"></label>
      <input
        class="text-tiny shadow w-full py-5 pl-8 outline-none rounded-3xl xl:text-lg"
        type="text"
        :value="githubUser"
        @input="handleInputChange"
        placeholder="Search Github username..."
      />
      <input
        class="
          my-2
          text-sm
          cursor-pointer
          bg-blue
          hover:bg-lightBlue
          duration-200
          text-white
          absolute
          right-2
          px-4
          py-3
          rounded-2xl
        "
        type="submit"
        value="Search"
      />
    </fieldset>
  </form>
</template>
