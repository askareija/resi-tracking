<template>
  <v-app :dark="darkMode">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      links: [
        { icon: 'receipt', text: 'Receipt Tracker', href: '/' },
        { icon: 'info', text: 'About', href: '/about' }
      ]
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style scoped></style>
