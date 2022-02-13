<template>
  <v-container class="test">
    <v-row class="text-center">
      <v-col cols="12">
        <h1>This is test page</h1>
        <v-card
          v-for="item in list" :key="item.id"
          elevation="2"
        >
          <h3>{{item.title}}</h3>
          <p>{{item.body}}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Getter, Mutation, namespace } from 's-vuex-class'
const List = namespace('List')

export default class HomeView extends Vue {
  items: object[] | null = null

  @List.Getter
  public list!: []

  @List.Action
  public getList!: () => void

  created() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.test {
  .v-card {
    margin-top: 40px;
    text-align: left;
    padding: 20px;
  }
}
</style>
