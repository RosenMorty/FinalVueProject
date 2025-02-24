<template>
  <header class="fixed top-0 left-0 w-full">
    <TheBar></TheBar>
  </header>
  <main>
    <TheFilm class="fixed top-0 left-0 mt-[96px]" />
  </main>
</template>

<script setup>
import TheBar from "./components/TheBar.vue";
import TheFilm from "./components/TheFilm.vue";
import TheModal from "./components/TheModal.vue";
</script>
