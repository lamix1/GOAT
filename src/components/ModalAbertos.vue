<template>
    <div class="modal-overlay" @click.self="close">
      <div class="modal-content">
        <button class="close-button" @click="close">X</button>
        <img class="modal-img" :src="camp.imagem" :alt="camp.nome">
        <div class="camp-content">
          <p class="jogo">{{ camp.jogo }}</p>
          <h3>{{ camp.nome }}</h3>
          <p>{{ camp.descricao }}</p>
          <p>Data de Início: {{ camp.dataInicio }}</p>
          <p>Tabela: {{ camp.tabela }}</p>
          <p>Times Inscritos: {{ camp.timesInscritos }}</p>
          <MaterialButton variant="gradient" color="warning" class="btn-icon mx-2">
            <div class="d-flex align-items-center">
                Quero Participar
              <!-- <i class="material-icons ms-2" aria-hidden="true">favorite</i> -->
            </div>
            </MaterialButton>
        </div>
      </div>
    </div>

    
  </template>
  
  <script>

import MaterialButton from './MaterialButton.vue';

  export default {
    components: {
    MaterialButton,
  },
    props: {
      camp: {
        type: Object,
        required: true,
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: #181818;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 500px;
    position: relative;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .modal-img {
    border-radius: 10px;
  }
  </style>
  