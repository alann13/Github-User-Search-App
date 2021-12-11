<script>
import companyIcon from '@assets/icon-company.svg'
import locationIcon from '@assets/icon-location.svg'
import { formatDate } from '@utils/helpers'
import { mapState } from 'vuex'
import Avatar from './Avatar.vue'
import Bio from './Bio.vue'
import LabelWithIcon from './LabelWithIcon.vue'
import SearchStatus from './SearchStatus.vue'
import StatItem from './StatItem.vue'
import Username from './Username.vue'

export default {
  name: 'GithubUserCard',
  computed: mapState({
    githubProfile: ({ githubProfile }) => githubProfile,
    isLoading: ({ isLoading }) => isLoading,
    hasError: ({ hasError }) => hasError,
  }),
  data() {
    return {
      locationIcon,
      companyIcon,
    }
  },
  methods: {
    formatDate,
  },
  components: { Bio, Avatar, StatItem, SearchStatus, Username, LabelWithIcon },
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow dark:shadow-none dark:bg-darkBlue dark:text-white">
    <!-- Fetching Data -->
    <div v-if="isLoading">
      <SearchStatus statusText="Searching..." />
    </div>

    <!-- No user found from api call -->
    <div v-else-if="hasError">
      <SearchStatus statusText="No Result." />
    </div>

    <!-- User is found from api call -->
    <div v-else-if="githubProfile" class="px-3 py-5 sm:px-8 sm:py-10 xl:py-16">
      <div class="flex items-center xl:items-start justify-between">
        <div class="w-3/12 xl:w-28">
          <Avatar :imgSrc="githubProfile.avatar_url" :imgAlt="githubProfile.name" />
        </div>

        <div class="relative flex flex-col w-9/12 pl-3 sm:pl-8 xl:p-0 xl:justify-between xl:flex-row xl:w-480px">
          <Username :name="githubProfile.name" :login="githubProfile.login" />

          <div class="text-tiny text-gray dark:text-white xl:text-base">
            Joined {{ formatDate(githubProfile.created_at) }}
          </div>
        </div>
      </div>

      <div class="mt-5 xl:flex xl:flex-col xl:justify-items-end xl:ml-auto xl:-mt-10 xl:w-480px">
        <Bio :bio="githubProfile.bio" />

        <div class="bg-lightGray dark:bg-altBlack mb-5 rounded-xl px-8 py-5 flex justify-between text-center">
          <div v-for="item in githubProfile.stats" :key="item.label">
            <StatItem :statLabel="item.label" :statCount="item.count" />
          </div>
        </div>

        <div class="flex flex-col md:flex-row">
          <LabelWithIcon :icon="locationIcon" :label="githubProfile.location" />
          <LabelWithIcon :icon="companyIcon" :label="githubProfile.company" />
        </div>
      </div>
    </div>

    <!-- Initial page load state -->
    <div v-else>
      <SearchStatus statusText="No profile searched yet." />
    </div>
  </div>
</template>
