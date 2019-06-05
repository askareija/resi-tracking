<template>
  <div class="about">
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <v-layout row align-center justify-center wrap>
      <v-flex xs6 sm2 md2 lg2 xl1 class="ml-1">
        <v-img
          :src="require('@/assets/logo.png')"
          width="120px"
          height="140px"
          contain
        />
      </v-flex>
      <v-flex xs4 sm2 md1 lg1 xl1 class="ml-1">
        <v-img
          :src="require('@/assets/ruby-on-rails-logo.png')"
          width="100px"
          height="160px"
          contain
          aspect-ratio="16/9"
        />
      </v-flex>
    </v-layout>
    <v-layout row align-center justify-center>
      <h4 class="display-1">Resi Tracking v1.0</h4>
    </v-layout>
    <v-layout row align-center justify-center></v-layout>
    <v-layout row align-center justify-center>
      <h3 class="font-weight-black">&copy; Aden Aziz Hasnayakin 2019</h3>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', disabled: true, href: '/' },
        { text: 'About', disabled: false, href: '/about' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
