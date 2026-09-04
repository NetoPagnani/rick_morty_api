<!-- components/PersonagemFilter.vue -->
<template>
  <div class="filter-container">
    <div class="search-box">
      <span class="icon">🔍</span>
      <input
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        placeholder="Digite o nome do personagem..."
        type="text"
      />
      <button
        v-if="modelValue"
        @click="emit('update:modelValue', '')"
        class="clear-btn"
      >
        ✕
      </button>
    </div>
    <span class="result-count">{{ count }} personagens encontrados</span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  count: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
.filter-container {
  padding: 20px;
  background: white;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 0 15px;
  border: 2px solid transparent;
  transition: border-color 0.3s;
}

.search-box:focus-within {
  border-color: #4caf50;
  background: white;
}

.search-box .icon {
  font-size: 1.2rem;
}

.search-box input {
  flex: 1;
  padding: 12px 0;
  border: none;
  background: transparent;
  font-size: 1rem;
  outline: none;
}

.clear-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1rem;
  padding: 5px;
}

.clear-btn:hover {
  color: #333;
}

.result-count {
  display: block;
  margin-top: 10px;
  color: #666;
  font-size: 0.9rem;
}
</style>
