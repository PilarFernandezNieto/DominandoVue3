<script setup>
import { ref } from 'vue'

const nuevaTarea = ref('')
const emit = defineEmits(['agregar'])

function buttonClick() {
  emit('agregar', nuevaTarea.value)
  nuevaTarea.value = ''
}
</script>

<template>
  <h2>Agregar Tarea</h2>
  <label for="nuevaTarea"
    >Nueva Tarea:
    <input type="text" name="nuevaTarea" id="nuevaTarea" v-model="nuevaTarea" />
  </label>
  <button v-show="nuevaTarea" @click="$emit(buttonClick, nuevaTarea)">Agregar</button>
</template>

<style scoped></style>
