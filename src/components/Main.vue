<template>
  <div>
    <Navbar/>
    <v-content>
      <v-card flat>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-card>
    </v-content>
  </div>
</template>

<script>
import Navbar from "./layouts/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
</style>