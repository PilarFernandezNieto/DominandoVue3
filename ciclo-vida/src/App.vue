<script setup>
import { ref } from "vue";
import ProductosCatalogo from "./components/ProductosCatalogo.vue";
import ContactoCliente from "./components/ContactoCliente.vue";


const opciones = {
  ProductosCatalogo,
  ContactoCliente
}
const seleccion = ref("ContactoCliente");
</script>

<template>
  <button @click="seleccion = 'ProductosCatalogo'">Productos</button>
  <button @click="seleccion = 'ContactoCliente'">Contacto</button>

  <component :is="opciones[seleccion]"></component>



</template>

<style scoped></style>
