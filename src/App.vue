<!-- App.vue -->
<template>
  <div id="app">
    <header class="app-header">
      <h1 class="titulo-personalizado">🧪 Rick and Morty API</h1>
      <p>Explore o multiverso de personagens</p>
    </header>

    <main>
      <PersonagemList />
    </main>

    <footer class="app-footer"></footer>
  </div>
</template>

<script setup>
import PersonagemList from "./components/PersonagemList.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "MinhaFontePersonalizada";
  src: url("@/assets/fonts/get_schwifty.ttf") format("truetype");

  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-image: 
    /* Gradiente branco que vai sumindo */
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 255, 255, 0.3) 30%,
      rgba(255, 255, 255, 0.1) 60%,
      rgba(255, 255, 255, 0.3) 100%
    ),
    url("assets/image/PORTAL.jpg");
  background-size: cover;
  background-position: center;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: linear-gradient(135deg, #298b628e, #042b197b);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.app-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.titulo-personalizado {
  font-family: "MinhaFontePersonalizada", "Segoe UI", cursive, sans-serif;
  font-size: 2.5rem;
  margin-bottom: 8px;
  color: #000000;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.app-header p {
  opacity: 0.9;
  font-size: 1.1rem;
}

main {
  flex: 1;
  padding: 20px;
}

.app-footer {
  text-align: center;
  padding: 20px;
  color: #666;
  border-top: 1px solid #e0e0e0;
  background: white;
}
</style>
