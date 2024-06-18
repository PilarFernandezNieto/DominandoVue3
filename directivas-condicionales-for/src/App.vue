<script setup>

import { ref } from "vue";

const pais = ref("");
const inputSede = ref("");

const sedes = ref([
  "Madrid",
  "Barcelona",
  "Santiago de Chile",
  "Santo Domingo",
  "Buenos Aires",
  "Bariloche"
])

const agregarSede = () => {
  sedes.value.push(inputSede.value);
  inputSede.value = "";
  
}


</script>

<template>
  <section>
    <img v-if="pais == 'es'" src="/spain_552062.png" alt="spain">
    <img v-else-if="pais == 'ar'" src="/argentina_300013.png" alt="argentina">
    <img v-else-if="pais == 'ch'" src="/chile_300080.png" alt="argentina">
    <img v-else src="/puzzle_5726788.png" alt="generica">
    <h4>Elige tu país</h4>
    <select name="pais" id="pais" v-model="pais">
      <option value="no" disabled selected>País</option>
      <option value="es">España</option>
      <option value="ar">Argentina</option>
      <option value="ch">Chile</option>
    </select>
  </section>


  <section>
    <h4>Nuestras sedes en el mundo</h4>
    <article v-for="sede, index in sedes" :key="index">
      <p>{{ sede }}</p>

    </article>

  </section>

  <section>
    <label for="nuevaSede">Nueva Sede: 
      <input type="text" name="nuevaSede" id="nuevaSede" placeholder="New York" v-model="inputSede">
    </label>
    <button v-show="inputSede" @click="agregarSede()">Agregar</button>

  </section>

</template>

<style scoped>
img {
  width: 100px;
}
</style>
