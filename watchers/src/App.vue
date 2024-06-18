<script setup>

import { ref, watch } from 'vue';

const pregunta = ref("");
const respuesta = ref({
  mensaje: "Las preguntas terminan con el signo ? ",
  imagen: "https://www.desafiocoaching.com/index_htm_files/37056.png"
})

watch(pregunta, async (nuevaPregunta) => {
  if (nuevaPregunta.includes("?")) {
    respuesta.value.mensaje = "Pensando...."


    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      respuesta.value.mensaje = data.answer;
      respuesta.value.imagen = data.image
    } catch (error) {
      console.log(error);
    }
  }
})

</script>

<template>
  <div>
    <p>Haz una pregunta de sí o no: </p>
    <input v-model="pregunta">
    <p>{{ respuesta.mensaje }}</p>
    <img :src=respuesta.imagen alt="Imagen">
  </div>

</template>

<style scoped></style>
