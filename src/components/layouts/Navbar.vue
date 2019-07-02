<template>
  <nav>
    <!-- TOOLBAR -->
    <v-toolbar app color="primary" dark>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Resi Tracking</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon @click="setDarkMode" v-on="on">
              <v-icon>opacity</v-icon>
            </v-btn>
          </template>
          <span>Switch Dark Mode</span>
        </v-tooltip>
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
        { icon: 'receipt', text: 'Track Receipt', href: '/' },
        { icon: 'info', text: 'About', href: '/about' }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    },
    setDarkMode() {
      this.$store.dispatch('setDarkMode')
    }
  }
}
</script>

<style lang="scss" scoped></style>
