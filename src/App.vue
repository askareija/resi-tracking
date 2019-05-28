<template>
  <v-app :dark="darkMode">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      darkMode: true,
      links: [
        { icon: "receipt", text: "Track Receipt", href: "/" },
        { icon: "history", text: "Track History", href: "/track_history" },
        { icon: "settings", text: "Settings", href: "/settings" },
        { icon: "info", text: "About", href: "/about" }
      ]
    };
  }
};
</script>

<style scoped>
</style>