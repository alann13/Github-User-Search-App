import { formatGithubProfile } from '@utils/helpers'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      githubUser: '',
      githubProfile: {},
    }
  },
  mutations: {
    updateGithubUser(state, searchedUser) {
      state.githubUser = searchedUser
    },
    updateGithubProfile(state, fetchedProfile) {
      state.githubProfile = formatGithubProfile(fetchedProfile)
    },
  },
})
