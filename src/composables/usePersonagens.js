// composables/usePersonagens.js
import { ref, onMounted, computed } from 'vue'

export function usePersonagens() {
  const personagens = ref([])
  const carregando = ref(true)
  const erro = ref(null)
  const filtroNome = ref('')

  const carregarDados = async () => {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      personagens.value = data.results
    } catch (e) {
      erro.value = e.message
      console.error("Erro ao carregar a API", e)
    } finally {
      carregando.value = false
    }
  }

  const personagensFiltrados = computed(() => {
    if (!personagens.value.length) return []
    const termo = filtroNome.value.toLowerCase().trim()
    if (!termo) return personagens.value
    return personagens.value.filter(p => 
      p.name.toLowerCase().includes(termo)
    )
  })

  // Carrega automaticamente quando usado
  onMounted(() => {
    carregarDados()
  })

  return {
    personagens,
    carregando,
    erro,
    filtroNome,
    personagensFiltrados,
    recarregar: carregarDados // Para recarregar manualmente
  }
}