<script setup>
import Container from './components/Container.vue'
import GithubUserCard from './components/GithubUserCard.vue'
import Header from './components/Header.vue'
import SearchBox from './components/SearchBox.vue'
</script>

<template>
  <Container>
    <Header />
    <main class="w-full">
      <SearchBox />
      <GithubUserCard />
    </main>
  </Container>
</template>

<style scoped>
main > * {
  margin-top: 30px;
}
</style>
