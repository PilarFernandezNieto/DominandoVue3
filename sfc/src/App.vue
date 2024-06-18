<script setup>
import { ref } from 'vue'
import MostrarTareas from './components/MostrarTareas.vue'
import AgregarTareas from './components/AgregarTareas.vue'
import SlotsComponent from './components/SlotsComponent.vue'

const listaTareas = ref([
  {
    id: 1,
    tarea: 'Ir a supermercado'
  },
  {
    id: 2,
    tarea: 'Bañar al perro'
  }
])

const agregarTarea = (tarea) => {
  listaTareas.value.push({
    id: listaTareas.length + 1,
    tarea: tarea
  })
}
const frase = 'La organización vence al tiempo'
</script>

<template>
  <SlotsComponent>
    <h1>Gestor de Tareas</h1>
    <img src="https://picsum.photos/200" alt="" />

    <!-- slot con nombre -->
    <template #mensaje>
      <p>{{ frase }}</p>
    </template>
  </SlotsComponent>

  <MostrarTareas :listaTareas="listaTareas" titulo="Tareas actuales" />
  <AgregarTareas @agregar="agregarTarea" />
</template>

<style scoped></style>
