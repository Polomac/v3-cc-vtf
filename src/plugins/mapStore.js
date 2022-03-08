import { computed } from 'vue'
import { useStore } from 'vuex'
const mapGetters = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store.getters).map(
      getter => [getter, computed(() => store.getters[getter])]
    )
  )
}

const mapActions = () => {
  const store = useStore()
  return Object.fromEntries(
    Object.keys(store._actions).map(
      action => [action, value => store.dispatch(action, value)]
    )
  )
}

export { mapGetters, mapActions }