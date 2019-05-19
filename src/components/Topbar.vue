<template>
  <v-toolbar app color="primary" dark>
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Resi Tracking</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn fab dark icon v-on="on">
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"/>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile>
            <v-list-tile-title>asd</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ["drawer"]
};
</script>

<style lang="scss" scoped>
</style>