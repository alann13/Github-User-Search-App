<script setup>
import Container from './components/Container.vue'
import GithubUser from './components/GithubUser.vue'
import Header from './components/Header.vue'
import SearchBox from './components/SearchBox.vue'
</script>

<template>
  <Container>
    <Header />
    <main>
      <SearchBox />
      <GithubUser />
    </main>
  </Container>
</template>
