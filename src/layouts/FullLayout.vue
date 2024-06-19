<script setup>
import MenuSuperior from '@/components/MenuSuperior.vue'
</script>
<template>
  <MenuSuperior />
  <main>
    <RouterView />
  </main>
</template>
<style>
header,
footer {

  color: white;
  height: 10%;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding-left: 0rem;
}
main {
  width: 100%;
  height: 100%;
}
</style>