<template>
  <v-navigation-drawer app v-model="drawer">
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
  }
}
</script>

<style lang="scss" scoped></style>
