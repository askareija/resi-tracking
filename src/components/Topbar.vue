<template>
  <v-toolbar app color="primary" dark>
    <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Resi Tracking</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn small flat>
        <v-icon dark>more_vert</v-icon>
      </v-btn>
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