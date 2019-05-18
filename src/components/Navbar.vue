<template>
  <nav>
    <Topbar :drawer="drawer"/>
    <v-navigation-drawer app v-model="drawer">
      <v-list class="primary" dark>
        <v-list-tile>
          <v-list-tile-title class="title">Main Menu</v-list-tile-title>
        </v-list-tile>
      </v-list>

      <v-divider></v-divider>

      <v-list class="pt-0">
        <v-list-tile v-for="link in links" :key="link.id" router :to="link.href">
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Topbar from "./Topbar";
export default {
  props: ["links"],
  data() {
    return {
      drawer: true
    };
  },
  components: {
    Topbar
  }
};
</script>

<style lang="scss" scoped>
</style>