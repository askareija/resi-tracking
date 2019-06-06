<template>
  <nav>
    <Topbar :drawer="drawer" @toggleSidebar="toggleSidebar" />
    <Sidebar :drawer="drawer" />
  </nav>
</template>

<script>
import Topbar from './Topbar'
import Sidebar from './Sidebar'

export default {
  props: ['links'],
  components: {
    Topbar,
    Sidebar
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    }
  },
  computed: {
    drawer() {
      return this.$store.state.drawer
    }
  }
}
</script>

<style lang="scss" scoped></style>
