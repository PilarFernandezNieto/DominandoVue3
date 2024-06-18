<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

onBeforeMount(() => console.log("Antes del montaje de Contacto"));
onMounted(() => console.log('Ya montado Contacto'));
onBeforeUnmount(() => console.log('Antes de desmontar Contacto'));
onUnmounted(() => console.log('Desmontado contacto'));
</script>

<template>
    <h1>Contacto</h1>
</template>



<style scoped></style>