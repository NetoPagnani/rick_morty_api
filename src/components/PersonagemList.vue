<!-- components/PersonagemList.vue -->
<template>
  <div class="personagem-list">
    <!-- Filtro -->
    <PersonagemFilter 
      v-model="filtroNome" 
      :count="personagensFiltrados.length"
    />

    <!-- Loading -->
    <div v-if="carregando" class="loading-container">
      <div class="spinner">🔄</div>
      <p>Carregando personagens...</p>
    </div>

    <!-- Error -->
    <div v-else-if="erro" class="error-container">
      <p>❌ Erro ao carregar: {{ erro }}</p>
      <button @click="recarregar" class="retry-btn">Tentar novamente</button>
    </div>

    <!-- Grid -->
    <div v-else class="grid">
      <PersonagemCard 
        v-for="personagem in personagensFiltrados" 
        :key="personagem.id"
        :personagem="personagem"
        @click="selecionarPersonagem"
      />
    </div>

    <!-- Sem resultados -->
    <div v-if="!carregando && !erro && personagensFiltrados.length === 0" 
         class="empty-state">
      <p>😕 Nenhum personagem encontrado para "{{ filtroNome }}"</p>
    </div>
  </div>
</template>

<script setup>
// ✅ IMPORTS CORRETOS
import { usePersonagens } from '../composables/usePersonagens'
import PersonagemCard from './PersonagemCard.vue'
import PersonagemFilter from './PersonagemFilter.vue'

// ✅ Usando o composable
const { 
  personagensFiltrados, 
  carregando, 
  erro, 
  filtroNome,
  recarregar
} = usePersonagens()

// ✅ Função para selecionar personagem
const selecionarPersonagem = (personagem) => {
  console.log('Personagem selecionado:', personagem)
  // Aqui você pode emitir um evento ou navegar
}
</script>

<style scoped>
.personagem-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 24px;
}

.loading-container {
  text-align: center;
  padding: 60px 20px;
}

.spinner {
  font-size: 3rem;
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.error-container {
  text-align: center;
  padding: 40px;
  background: #f3fff7;
  border-radius: 12px;
  border: 1px solid #ffcdd2;
}

.retry-btn {
  margin-top: 15px;
  padding: 10px 30px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

.retry-btn:hover {
  background: #388E3C;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  font-size: 1.2rem;
  color: #666;
}
</style>