<template>
  <v-toolbar app color="primary" dark>
    <v-toolbar-side-icon @click="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title>Resi Tracking</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class>
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn fab dark icon v-on="on">
            <v-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"/>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-tile>
            <v-list-tile-title>
              <v-icon left>receipt</v-icon>
              <span>Track History</span>
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-title>
              <v-icon left>exit_to_app</v-icon>
              <span>Logout</span>
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ["drawer"],
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar')
    }
  },
};
</script>

<style lang="scss" scoped>
</style>