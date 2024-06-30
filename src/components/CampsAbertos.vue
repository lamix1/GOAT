<template>
    <div class="campeonato">
      <div v-for="campeonatos in campeonatos" :key="campeonatos.id" class="card">
        <h2>{{ campeonatos.nome }}</h2>
        <p><strong>Jogo</strong> {{ campeonatos.jogo }}</p>
        <p><strong>Datas</strong> {{ campeonatos.datas }}</p>
        <p><strong>Tabela</strong> {{ campeonatos.tabela }}</p>
        <p><strong>TimesInscritos</strong> {{ campeonatos.timesInscritos }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CampeonatosLista',
    data() {
      return {
        campeonatos: []
      };
    },
    created() {
      this.fetchCampeonatos();
    },
    methods: {
      async fetchCampeonatos() {
        try {
          const response = await fetch('/api.json');
          const data = await response.json();
          this.campeonatos = data.campeonatos;
        } catch (error) {
          console.error('Error fetching campeonatos:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  .campeonatos {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 20px;
  }
  
  .card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
  }
  </style>
  