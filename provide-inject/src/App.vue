<script setup>
import { ref, provide } from "vue";
import HijoComponente from "./components/HijoComponente.vue"

const frase = ref("Amanece, que no es poco");
provide("fraseANieto", frase);

</script>

<template>
  <main>
    <h1>App.vue</h1>
    <label for="frase">
      Nueva Frase: 
      <input type="text" v-model= "frase">
    </label>
    <HijoComponente />
  </main>

</template>

<style scoped>
main {
  width: 50%;
  margin: 0 auto;
  padding: 2em;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
}

</style>
