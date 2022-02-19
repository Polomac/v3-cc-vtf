<template>
  <v-app>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="toolbar-title">Vue 3 - Vuetify Test</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title><router-link to="/test">About</router-link></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

export default class App extends Vue {
  drawer = false
  group = null

  @Watch('$route')
  onRouteChanged(val: string, oldVal: string) {
    this.drawer = false
  }
}
</script>
<style lang="scss">
@import './assets/styles/main.scss';

.toolbar-title {
  color: white;
  font-weight: 500;
  padding-right: 20px;
}

.v-navigation-drawer {
  .v-list-item-title {
    padding-left: 20px;
    a {
      text-decoration: none;
      color: purple;
        &.router-link-exact-active {
        color: dodgerblue;
      }
    }
  }
  
}

.v-main {
  height: 90vh;
  overflow: hidden;
}
</style>
