<!-- components/PersonagemError.vue -->
<template>
  <div class="error-container" :class="tipo">
    <!-- Ícone de erro -->
    <div class="error-icon">
      <span v-if="tipo === 'network'">🌐</span>
      <span v-else-if="tipo === '404'">🔍</span>
      <span v-else-if="tipo === '500'">⚙️</span>
      <span v-else>❌</span>
    </div>

    <!-- Título do erro -->
    <h3 class="error-title">{{ titulo || 'Ops! Algo deu errado' }}</h3>

    <!-- Mensagem detalhada -->
    <p class="error-message">{{ mensagem || erro || 'Não foi possível carregar os personagens.' }}</p>

    <!-- Código do erro (se disponível) -->
    <div v-if="codigo" class="error-code">
      <span class="code-badge">Erro {{ codigo }}</span>
    </div>

    <!-- Ações/Sugestões -->
    <div class="error-actions">
      <button @click="emit('retry')" class="btn-retry">
        🔄 Tentar novamente
      </button>
      
      <button v-if="mostrarVoltar" @click="emit('back')" class="btn-back">
        ← Voltar
      </button>
    </div>

    <!-- Detalhes técnicos (opcional - para devs) -->
    <details v-if="mostrarDetalhes" class="error-details">
      <summary>🔧 Detalhes técnicos</summary>
      <pre>{{ erroDetalhado || erro }}</pre>
    </details>

    <!-- Sugestões de solução -->
    <div v-if="sugestoes.length" class="error-suggestions">
      <p><strong>💡 Sugestões:</strong></p>
      <ul>
        <li v-for="(sugestao, index) in sugestoes" :key="index">
          {{ sugestao }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Mensagem de erro principal
  erro: {
    type: String,
    default: null
  },
  // Título personalizado
  titulo: {
    type: String,
    default: ''
  },
  // Mensagem personalizada
  mensagem: {
    type: String,
    default: ''
  },
  // Código HTTP (404, 500, etc)
  codigo: {
    type: [Number, String],
    default: null
  },
  // Tipo de erro (network, 404, 500, generic)
  tipo: {
    type: String,
    default: 'generic',
    validator: (value) => ['network', '404', '500', 'generic'].includes(value)
  },
  // Mostrar botão "Voltar"
  mostrarVoltar: {
    type: Boolean,
    default: false
  },
  // Mostrar detalhes técnicos
  mostrarDetalhes: {
    type: Boolean,
    default: false
  },
  // Erro detalhado (stack trace, etc)
  erroDetalhado: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['retry', 'back'])

// Sugestões automáticas baseadas no tipo de erro
const sugestoes = computed(() => {
  const sugestoesMap = {
    network: [
      'Verifique sua conexão com a internet',
      'Tente recarregar a página',
      'Verifique se o servidor da API está online'
    ],
    '404': [
      'O recurso solicitado não foi encontrado',
      'Verifique se a URL da API está correta',
      'O personagem pode ter sido removido'
    ],
    '500': [
      'O servidor está com problemas temporários',
      'Tente novamente em alguns minutos',
      'Entre em contato com o suporte se o problema persistir'
    ],
    generic: [
      'Tente recarregar a página',
      'Verifique sua conexão com a internet',
      'Se o problema persistir, contate o suporte'
    ]
  }
  
  return sugestoesMap[props.tipo] || sugestoesMap.generic
})
</script>

<style scoped>
.error-container {
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  max-width: 600px;
  margin: 20px auto;
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  border-left: 6px solid #f44336;
}

/* ===== VARIANTES DE COR ===== */
.error-container.network {
  border-left-color: #FF9800;
  background: #FFF8E1;
}

.error-container.\34 04 {
  border-left-color: #2196F3;
  background: #E3F2FD;
}

.error-container.\35 00 {
  border-left-color: #F44336;
  background: #FFEBEE;
}

/* ===== ÍCONE ===== */
.error-icon {
  font-size: 4rem;
  margin-bottom: 15px;
  display: block;
}

/* ===== TÍTULO ===== */
.error-title {
  color: #333;
  font-size: 1.5rem;
  margin: 10px 0;
  font-weight: 700;
}

/* ===== MENSAGEM ===== */
.error-message {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin: 10px 0 20px 0;
}

/* ===== CÓDIGO DO ERRO ===== */
.error-code {
  margin: 15px 0;
}

.code-badge {
  display: inline-block;
  background: #f44336;
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.error-container.network .code-badge {
  background: #FF9800;
}

.error-container.\34 04 .code-badge {
  background: #2196F3;
}

/* ===== BOTÕES ===== */
.error-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0;
}

.btn-retry {
  padding: 12px 30px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-retry:hover {
  background: #388E3C;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.btn-retry:active {
  transform: translateY(0);
}

.btn-back {
  padding: 12px 30px;
  background: #e0e0e0;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-back:hover {
  background: #bdbdbd;
}

/* ===== DETALHES TÉCNICOS ===== */
.error-details {
  margin-top: 20px;
  text-align: left;
  background: #f5f5f5;
  border-radius: 8px;
  padding: 10px;
}

.error-details summary {
  cursor: pointer;
  color: #666;
  font-weight: 600;
  padding: 5px;
}

.error-details pre {
  background: #1E293B;
  color: #E2E8F0;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.8rem;
  margin-top: 10px;
  font-family: 'Courier New', monospace;
}

/* ===== SUGESTÕES ===== */
.error-suggestions {
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: left;
}

.error-suggestions p {
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.error-suggestions ul {
  margin: 0;
  padding-left: 20px;
  color: #666;
}

.error-suggestions li {
  margin: 5px 0;
  font-size: 0.9rem;
}
</style>