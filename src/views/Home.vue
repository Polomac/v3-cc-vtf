<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineAsyncComponent } from 'vue'

@Options({
  components: {
    HelloWorld: defineAsyncComponent(() => import('../components/HelloWorld.vue')),
  },
})
export default class HomeView extends Vue {}
</script>
