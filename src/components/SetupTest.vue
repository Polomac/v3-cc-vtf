<template>
    <h2 class="mt-10 mb-4">This is imported component</h2>
    <v-card :elevation="2" class="pa-5">
      {{username}}
      <v-spacer></v-spacer>
      <v-btn color="teal" text-color="white" flat @click="updateUsername">Update</v-btn>
    </v-card>
    <setup-test></setup-test>
</template>

<script setup>
const SetupTest = () => import('@/components/SetupTest.vue');
import { onMounted } from 'vue'
import { useUsername } from '@/composables/useUsername'

const { username, updateUsername } = useUsername();

onMounted(() => {
  alert('This is imported setup component')
})
</script>
