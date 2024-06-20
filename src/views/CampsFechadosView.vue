<template>
  <div id="app">
    <main>
      <section class="camp">
        <div class="camp-card" v-for="camp in campItems" :key="camp.id">
          <img :src="camp.image" :alt="camp.title">
          <div class="camp-content">
            <p class="category">{{ camp.category }}</p>
            <h3>{{ camp.title }}</h3>
            <p>{{ camp.description }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import goatImage from '@/assets/GOAT_2.jpg';

export default {
  name: 'App',
  data() {
    return {
      campItems: [
        {
          id: 1,
          category: 'Campeonato',
          title: 'Campeonato de CSGO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          image: goatImage
        },
        {
          id: 2,
          category: 'Campeonato',
          title: 'Campeonato Valorant',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          image: goatImage
        },
        {
          id: 3,
          category: 'Campeonato',
          title: 'Campeonato de CSGO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          image: goatImage
        },
        {
          id: 4,
          category: 'Campeonato',
          title: 'Campeonato Valorant',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          image: goatImage
        },
        {
          id: 5,
          category: 'Campeonato',
          title: 'Campeonato LOL',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
          image: goatImage
        }
      ]
    };
  }
}
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

.camp-content .category {
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
