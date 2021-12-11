import { formatGithubProfile } from '@utils/helpers'
import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      githubUser: '',
      githubProfile: null,
      hasError: false,
      isLoading: false,
      isDarkTheme: false,
    }
  },
  mutations: {
    toggleTheme(state, isDarkTheme) {
      state.isDarkTheme = isDarkTheme
      document.documentElement.classList.toggle('dark')
    },
    updateGithubUser(state, searchedUser) {
      state.githubUser = searchedUser
    },
    updateGithubProfile(state, fetchedProfile) {
      state.githubProfile = formatGithubProfile(fetchedProfile)
    },
    userQuerying(state, loadingStatus) {
      state.isLoading = loadingStatus
    },
    updateErrorStatus(state, errorStatus) {
      state.hasError = errorStatus
    },
  },
})
