<script setup>
import {ref, reactive, computed} from "vue";

  const taller = "Taller La Tuerca  🔧";

  const servicio1 = ref("Básico");
  const servicio2 = ref("Especial");

  servicio2.value = "Premium"

  const repuesto1 = reactive({
    id: 1,
    nombre: "Filtro de aceite",
    precio: 100,
    disponibilidad: true
  })

  repuesto1.disponibilidad = false

  const evaluarPrecio = computed(() => {
    return (repuesto1.precio < 120) ? "Oferta!!!" : "Precio regular" 

  })
  const evaluarDisponibilidad = () => {
    return (repuesto1.disponibilidad) ? "✅" : "❌"
  }

</script>

<template>
  <h1>{{ taller }}</h1>
  <h3>Servicios Disponibles</h3>
  <ul>
    <li>{{ servicio1 }}</li>
    <li>{{ servicio2 }}</li>
  </ul>
  <hr>
  <h3>Repuestos</h3>
  <section>
    <p>{{ repuesto1.nombre }} ... {{ repuesto1.precio }}€ </p>
    <p> - {{ evaluarPrecio }}</p>
    <p> - {{ evaluarDisponibilidad() }}</p>
    
  </section>

</template>

<style scoped>
h1, h3, p, li{
  font-family: monospace;
}

section {
  display: flex
}

</style>
