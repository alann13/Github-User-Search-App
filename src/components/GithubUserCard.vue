<script>
import { mapState } from 'vuex'

export default {
  name: 'GithubUserCard',
  computed: mapState({
    githubProfile: (state) => state.githubProfile,
  }),
}
</script>

<template>
  <h2 v-if="githubProfile.name">{{ githubProfile.name }}</h2>
  <h2 v-else>no profile searched yet.</h2>
</template>
