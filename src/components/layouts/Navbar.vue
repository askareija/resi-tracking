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
  data() {
    return {
      drawer: true
    }
  },
  components: {
    Topbar,
    Sidebar
  },
  methods: {
    toggleSidebar() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped></style>
