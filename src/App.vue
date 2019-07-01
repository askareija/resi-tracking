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
      darkMode: true,
      links: [
        { icon: 'receipt', text: 'Track Receipt', href: '/' },
        { icon: 'info', text: 'About', href: '/about' }
      ]
    }
  }
}
</script>

<style scoped></style>
