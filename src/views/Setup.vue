<template>
  <v-container class="setup-page" :cols="6">
    <h2 class="mt-10 mb-4">This is script setup view</h2>
    <v-card :elevation="2" class="pa-5">
      {{username}}
      <v-spacer></v-spacer>
      <v-btn color="teal" text-color="white" flat @click="updateUsername">Update</v-btn>
    </v-card>
    <setup-test></setup-test>
  </v-container>
</template>

<script setup>
import { onMounted, defineAsyncComponent  } from 'vue'
import { useUsername } from '@/composables/useUsername'
import { mapActions, mapGetters} from 'vuex'
const SetupTest = defineAsyncComponent(() => import('@/components/SetupTest.vue'));
const { username, updateUsername } = useUsername();

onMounted(() => {
  alert('This is setup page')
})
</script>

<style lang="scss">
  .setup-page {
    .v-card{
      display: flex;
      flex-wrap: nowrap;
      flex-flow: row;
      align-items: center;
    }
  }
</style>