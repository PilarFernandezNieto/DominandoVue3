<script setup>
import { inject } from 'vue';

const fraseInyectada = inject("fraseANieto")

</script>

<template>
    <div>
        <h2>Nieto componente</h2>
        <p>{{ fraseInyectada  }}</p>
    </div>
</template>



<style scoped>
    div {
        margin-top: 20px;
        background-color: tomato;
        color: white;
        border-radius: 10px;
        padding: 20px;
    }
</style>