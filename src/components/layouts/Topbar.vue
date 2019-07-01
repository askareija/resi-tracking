<template>
  <v-toolbar app color="primary" dark>
    <v-toolbar-side-icon @click="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title>Resi Tracking</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items @click="setDarkMode">
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  props: ['drawer'],
  methods: {
    toggleSidebar() {
      this.$emit('toggleSidebar')
    },
    setDarkMode() {
      alert('Dark MOde Changed')
      this.$store.dispatch('setDarkMode', false)
    }
  }
}
</script>

<style lang="scss" scoped></style>
