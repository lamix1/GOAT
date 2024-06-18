<script setup>
import { ref } from 'vue';

const menuAberto = ref(false);
</script>

<template>
  <header>
    <div class="header--logo">
      <img src="@/assets/logo.png" alt="Logo" />
    </div>
    <nav>
      <ul :class="menuAberto ? 'menu' : ''">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Como Participar</a></li>
        <li><a href="#contact">Contato</a></li>
        <li><a href="ajuda">Ajuda</a></li>
      </ul>
    </nav>
    <div class="header--icons">
      <Account />
      <CartPlus />
      <Menu class="menu-hamburger" @click="menuAberto = !menuAberto" />
    </div>
  </header>
</template>

<style scoped>
header {
  background: #121212;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header--logo {
  display: flex;
  align-items: center;
}
.header--logo img {
  width: 150px;
  height: auto;
  margin-right: 0.5rem;
}
nav ul {
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
nav li {
  list-style: none;
}
nav a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
}
.header--icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.menu-hamburger {
  display: none;
}

@media (max-width: 768px) {
  nav ul {
    display: none;
  }
  .menu-hamburger {
    display: block;
  }

  nav .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    border-radius: 10px;
    right: 10px;
    top: 60px;
    text-align: right;
    padding: 10px 16px;
  }
  nav .menu li {
    display: block;
    margin-top: 12px;
  }
  nav .menu a {
    color: #121212;
  }
}
</style>