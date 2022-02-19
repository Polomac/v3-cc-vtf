<template>
  <v-container class="test">
    <h1>This is test page</h1>
    <v-row class="text-center">
      <perfect-scrollbar @ps-scroll-y="onScroll" ref="scrollbar">
      <v-col cols="12">
        <v-card
          v-for="item in list"
          :key="item.id"
          elevation="2">
          <h3>{{item.title}}</h3>
          <p>{{item.body}}</p>
        </v-card>
      </v-col>
      </perfect-scrollbar>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Options, Vue, setup } from 'vue-class-component';
import { useStore } from 'vuex'
import { Getter, Mutation, namespace } from 's-vuex-class'
const List = namespace('List');

export default class HomeView extends Vue {

  items: object[] | null = null

  @List.Getter
  public list!: []

  @List.Getter
  public time!: string

  @List.Action
  public getList!: () => void

  onScroll(event: any) {
    console.log('SCROLLED');
  }

  created () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
.test {
  h1{
    margin-bottom:40px;
  }
  .text-center {
    overflow-y: hidden;
    .ps {
      
    height: 600px;
    }
  }
  .v-card {
    margin-top: 40px;
    text-align: left;
    padding: 20px;
  }
}
</style>
