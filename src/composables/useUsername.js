import { ref } from 'vue'

export const useUsername = () => {
  const username = ref('Georgios')

  const updateUsername = () => {
    username.value = username.value === 'Georgios' ? 'Artem' : 'Byron'
  }

  return {
    username,
    updateUsername,
  }
}