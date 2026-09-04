<!-- components/PersonagemCard.vue -->
<template>
  <div class="card" @click="emit('click', personagem)">
    <img :src="personagem.image" :alt="personagem.name" loading="lazy" />
    <div class="card-content">
      <h3>{{ personagem.name }}</h3>
      <div class="card-info">
        <span class="species">{{ personagem.species }}</span>
        <span :class="['status', personagem.status.toLowerCase()]">
          {{ personagem.status }}
        </span>
      </div>
      <p class="origin">{{ personagem.origin.name }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  personagem: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
}

.card-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.status {
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.status.alive { background: #c8e6c9; color: #2e7d32; }
.status.dead { background: #ffcdd2; color: #c62828; }
.status.unknown { background: #e0e0e0; color: #616161; }

.species {
  color: #666;
  font-size: 0.9rem;
}

.origin {
  color: #999;
  font-size: 0.8rem;
  margin: 5px 0 0 0;
}
</style>