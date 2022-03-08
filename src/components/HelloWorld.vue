<template>
  <v-container>
    <v-row class="text-center">
      <h2>This is a prop: {{msg}}</h2>
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { Options, Vue } from 'vue-class-component';
import { defineAsyncComponent  } from 'vue'
import { Prop } from 'vue-property-decorator'


@Options({
  name: 'HelloWorld',
})

export default class HelloWorld extends Vue {
  @Prop() readonly msg!: string
}
</script>

<style lang="scss">
.home {
  .v-container {
    h2 {
      display: flex;
      justify-content: center;
      width: 100%;
      margin: 40px 0;
    }
  }
}
</style>

