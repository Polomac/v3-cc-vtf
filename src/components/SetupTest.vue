<template>
    <h2 class="mt-10 mb-4">This is imported component</h2>
    <v-card :elevation="2" class="pa-5">
      {{username}}
      <v-spacer></v-spacer>
      <v-btn color="teal" text-color="white" flat @click="updateUsername">Update</v-btn>
    </v-card>
    <v-container class="setup-test-data mt-7" v-if="Boolean(list.length)">
      <perfect-scrollbar ref="scrollbar" :options="scrollOptions">
        <v-card class="my-4 pa-5 mr-3" v-for="item in list" :key="item.id" :elevation="2">
          {{item.title}}
        </v-card>
      </perfect-scrollbar>
    </v-container>
    <v-progress-linear
      class="mt-7"
      v-else
      color="teal"
      indeterminate
      reverse
    ></v-progress-linear>
</template>

<script setup>
import { onMounted, onBeforeMount, computed } from 'vue'
import { useUsername } from '@/composables/useUsername'
// import { useStore } from 'vuex'
import { mapGetters, mapActions } from '../plugins/mapStore'

// const store = useStore()

const scrollOptions = {
  scrollingThreshold: 0,
}

const { username, updateUsername } = useUsername();

// Getters
// Use store example: const list = computed(() => store.getters['List/list'])
const list = mapGetters()['List/list']

// Actions
const getList = mapActions()['List/getList']

onBeforeMount(() => {
  getList()
})

</script>

<style lang="scss" scoped>
.setup-test-data {
  overflow-y: hidden;
  .ps {
    height: 500px;
  }
}
</style>
