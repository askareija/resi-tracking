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
<<<<<<< HEAD
  data() {
    return {
      drawer: true
    }
  },
=======
>>>>>>> 4-tracking-function
  components: {
    Topbar,
    Sidebar
  },
  methods: {
    toggleSidebar() {
      this.$store.dispatch('toggleSidebar')
    }
<<<<<<< HEAD
=======
  },
  computed: {
    drawer() {
      return this.$store.state.drawer
    }
>>>>>>> 4-tracking-function
  }
}
</script>

<style lang="scss" scoped></style>
