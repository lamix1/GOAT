<script>

import Card from '../components/CardHome.vue';

export default {
  components: {
    Card
  }
};

</script>

<template>
  <div class="container">

    <Card>
      <template v-slot:front>
        <div class="custom-front-content">
          Front Card
        </div>
      </template>
      <template v-slot:back>
        <div class="custom-back-content">
          Back Card 
        </div>
      </template>
      </Card>
  
  <div class="button-container"> 
  <router-link to="/campsfechados" custom v-slot="{ navigate }">
  <button @click="navigate" role="link" type="button" class="camp-button">
    Campeonatos Fechados
  </button>
</router-link>
<router-link to="/campsabertos" custom v-slot="{ navigate }">
  <button @click="navigate" role="link" type="button" class="camp-button">
    Campeonatos Abertos
  </button>
</router-link>
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