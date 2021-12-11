<script>
import { formatDate } from '@utils/helpers'
import { mapState } from 'vuex'
import Bio from './Bio.vue'

export default {
  name: 'GithubUserCard',
  computed: mapState({
    githubProfile: (state) => state.githubProfile,
  }),
  methods: {
    formatDate,
  },
  components: { Bio },
}
</script>

<template>
  <div class="bg-white rounded-2xl shadow px-3 py-5">
    <div v-if="githubProfile.name">
      <div class="flex items-center">
        <div class="w-3/12 mr-5">
          <img class="rounded-full w-full" v-bind:src="githubProfile.avatar_url" v-bind:alt="githubProfile.name" />
        </div>
        <div>
          <h2 v-if="githubProfile.name" class="font-bold text-base">{{ githubProfile.name }}</h2>

          <h4 class="text-tiny text-blue">{{ githubProfile.login }}</h4>

          <div class="text-tiny text-gray">Joined {{ formatDate(githubProfile.created_at) }}</div>
        </div>
      </div>

      <div class="mt-5">
        <Bio :bio="githubProfile.bio" />

        <div class="bg-lightGray rounded-xl px-8 py-5 flex justify-between text-center">
          <div>
            <div class="text-xxs mb-2 text-altBlue">Repos</div>
            <div class="text-base font-bold text-black">{{ githubProfile.public_repos }}</div>
          </div>
          <div>
            <div class="text-xxs">Repos</div>
            <div>{{ githubProfile.public_repos }}</div>
          </div>
          <div>
            <div class="text-xxs">Repos</div>
            <div>{{ githubProfile.public_repos }}</div>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
    <div v-else>No profile searched yet.</div>
  </div>
</template>
