<script setup>
import CampeonatosLista from '@/components/CampsFechados.vue'

</script>

<template>
    <CampeonatosLista />    
    <div class="container">
  
      <div class="image-container">
      
    </div>
    
    <div class="button-container"> 
    <button class="camp-button" @click="handleClick">
      Campeonatos Fechados
    </button>
    <button class="camp-button" @click="handleClick">
      Campeonatos Abertos
    </button>
  </div>
  
  </div>
  </template>