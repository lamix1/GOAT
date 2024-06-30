<template>
  <div id="app">
    <main>
      <section class="camp">
        <div class="camp-card" v-for="camp in campItems" :key="camp.id" @click="openModal(camp)">
          <img class="img-card" :src="camp.imagem" :alt="camp.nome">
          <div class="camp-content">
            <p class="nome">{{ camp.nome }}</p>
            <h3>{{ camp.jogo }}</h3>
            <p>{{ camp.descricao }}</p>
          </div>
        </div>
      </section>
    </main>

    <Modal v-if="selectedCamp" :camp="selectedCamp" @close="closeModal" />

  </div>
</template>

<script>
import goatImage from '@/assets/GOAT_2.jpg';
import Modal from '@/components/ModalAbertos.vue';

export default {
  name: 'CampsAbertosView',
  components: {
    Modal,
  },
  data() {
    return {
      campItems: [
        {
          id: 1,
          nome: 'Copa Pistão',
          jogo: 'CSGO',
          descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          imagem: goatImage,
          dataInicio: '01/05/2024',
          tabela: '',
          timesInscritos: 'Xablau, Viadocas, Feijõeszinhos',
        },
      ],
      selectedCamp: null,
    };
  },
  methods: {
    openModal(camp) {
      this.selectedCamp = camp;
    },
    closeModal() {
      this.selectedCamp = null;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  color: #333;
  background-color: #f5f5f5;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #20232a;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
}

nav a {
  color: #61dafb;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #fff;
}

main {
  flex: 1;
  overflow-y: auto;
}

.camp {
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.camp-card {
  background-color: #1f1f1f;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: calc(33.333% - 20px);
  margin-bottom: 20px;
}

.camp-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.camp-content {
  padding: 20px;
}

.camp-content .nome {
  font-size: 0.9rem;
  font-weight: bold;
  color: #e03a3e;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.camp-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.camp-content p {
  font-size: 1rem;
  color: #555;
}

.camp-card:hover {
  transform: translateY(-10px);
}

</style>
