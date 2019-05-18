<template>
  <v-app :dark="darkMode">
    <Navbar :links="links"/>
    <v-content>
      <v-card flat>
        <v-container fluid>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

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
  },
  components: {
    Navbar
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>