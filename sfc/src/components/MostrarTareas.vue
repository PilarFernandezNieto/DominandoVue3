<script setup>
const props = defineProps({
  listaTareas: Array,
  titulo: String
})
</script>

<template>
  <h2>{{ props.titulo }}</h2>

  <ul>
    <li v-for="tarea in listaTareas" :key="tarea.id">{{ tarea.tarea }}</li>
  </ul>
</template>

<style scoped></style>
