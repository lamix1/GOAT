<script setup>
import MenuSuperior from '@/components/MenuSuperior.vue';

const handleClick = () => {
  console.log("Botão 'Campeonatos Fechados' clicado");
};

</script>

<template>
  <MenuSuperior /> 
  <div class="container">

    <div class="image-container">
    <img src="@/assets/background_lan.png" alt="" class="background-image">
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

<style>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.background-image {
  max-width: 100%;
  height: auto;
}

.button-container {
  display: flex;
  gap: 10px;
}

.camp-button {
  background-color: #7E59D8;
  color: white;
  border: none;
  border-radius: 9px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.camp-button:hover {
  background-color: #6347ac;
  transform: scale(1.05);
}

.camp-button:active {
  background-color: #6347ac;
  transform: scale(0.95);
}
</style>