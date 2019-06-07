<template>
  <nav>
    <!-- TOOLBAR -->
    <v-toolbar app color="primary" dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Resi Tracking</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class>
        <v-menu transition="slide-y-transition" bottom>
          <template v-slot:activator="{ on }">
            <v-btn fab dark icon v-on="on">
              <v-avatar>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                />
              </v-avatar>
            </v-btn>
          </template>

          <v-list>
            <v-list-tile router to="/track_history">
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

    <!-- NAVIGATION DRAWER -->
    <v-navigation-drawer app v-model="drawer">
      <v-divider></v-divider>

      <v-list class="pt-0">
        <v-list-tile
          v-for="link in links"
          :key="link.id"
          router
          :to="link.href"
        >
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
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: 'receipt', text: 'Track Receipt', href: '/track_receipt' },
        { icon: 'history', text: 'Track History', href: '/track_history' },
        { icon: 'settings', text: 'Settings', href: '/settings' },
        { icon: 'info', text: 'About', href: '/about' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    }
  }
}
</script>

<style lang="scss" scoped></style>
