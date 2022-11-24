<script setup>
import CabecalhoComp from "./components/template/CabecalhoComp.vue";
import FundoComp from "./components/template/FundoComp.vue";
</script>
<template>
  <CabecalhoComp />
  <main>
    <FundoComp />
    <RouterView />
  </main>
</template>
