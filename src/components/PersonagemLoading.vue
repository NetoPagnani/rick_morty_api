<!-- components/PersonagemLoading.vue -->
<template>
  <div class="loading-container">
    <!-- Spinner/Ícone animado -->
    <div class="spinner-wrapper">
      <div class="spinner"></div>
      <!-- Ou use um ícone/emoji -->
      <!-- <span class="spinner-emoji">🌀</span> -->
    </div>
    
    <!-- Mensagem de carregamento -->
    <p class="loading-text">{{ mensagem || 'Carregando personagens...' }}</p>
    
    <!-- Barra de progresso (opcional) -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progresso + '%' }"></div>
    </div>
    
    <!-- Dicas/Skeletons (opcional) -->
    <div class="skeleton-grid">
      <div v-for="n in 6" :key="n" class="skeleton-card">
        <div class="skeleton-image"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mensagem: {
    type: String,
    default: 'Carregando personagens...'
  },
  progresso: {
    type: Number,
    default: 0 // 0-100
  },
  mostrarSkeleton: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.loading-container {
  padding: 40px 20px;
  text-align: center;
}

/* ===== SPINNER CLÁSSICO (CSS Puro) ===== */
.spinner-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #4CAF50;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ===== EMOJI SPINNER (Alternativa) ===== */
.spinner-emoji {
  font-size: 3rem;
  display: inline-block;
  animation: spin-emoji 1s linear infinite;
}

@keyframes spin-emoji {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* ===== TEXTO ===== */
.loading-text {
  color: #666;
  font-size: 1.1rem;
  margin: 10px 0;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* ===== BARRA DE PROGRESSO ===== */
.progress-bar {
  width: 100%;
  max-width: 300px;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  margin: 15px auto;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4CAF50, #8BC34A);
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* ===== SKELETON LOADING ===== */
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.skeleton-card {
  background: white;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.skeleton-image {
  width: 100%;
  height: 180px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 8px;
  animation: shimmer 1.5s infinite;
}

.skeleton-line {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-top: 10px;
  animation: shimmer 1.5s infinite;
}

.skeleton-line.short {
  width: 60%;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>