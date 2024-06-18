<script setup>
import { ref } from "vue";
import ProductosCatalogo from "./components/ProductosCatalogo.vue";
import ContactoCliente from "./components/ContactoCliente.vue";
import PadreAsync from "./components/PadreAsync.vue";

const opciones = {
  ProductosCatalogo,
  ContactoCliente
}
const seleccion = ref("ContactoCliente");
</script>

<template>
  <button @click="seleccion = 'ProductosCatalogo'">Catálogo Productos</button>
  <button @click="seleccion = 'ContactoCliente'">Formulario de contacto</button>

  <component :is="opciones[seleccion]"></component>

  <hr>
  <PadreAsync />

</template>

<style scoped></style>
