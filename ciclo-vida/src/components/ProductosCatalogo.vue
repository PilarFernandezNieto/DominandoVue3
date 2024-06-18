<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, onBeforeUpdate, onUpdated,  } from 'vue';
const contador = ref(0);

onBeforeMount(() => console.log("Antes del montaje de producto"));
onMounted(() => console.log('Ya montado producto'));
onBeforeUpdate(() => {
    console.log('Antes de actualizar contador ' +  contador.value);
    
});
onUpdated(() => {
    console.log('Actualizado en el DOM. Contador ' + contador.value);
    
}),
onBeforeUnmount(() => console.log('Antes de desmontar producto'));
onUnmounted(() => console.log('Desmontado producto'));

</script>

<template>
    <h1>Lista de productos</h1>
    <p>Cantidad de productos: {{ contador }} unidades</p>
    <button @click="contador++">Agregar</button>
</template>



<style scoped></style>