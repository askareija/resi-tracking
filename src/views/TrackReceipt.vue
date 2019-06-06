<template>
  <div class>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>

    <!-- Judul -->
    <p class="headline">Track Receipt</p>

    <TrackForm />

    <!-- <TrackHeaderStatus class="mt-5" v-bind:receipts="receipts" /> -->
    <v-layout wrap class="mt-5">
      <TrackGeneralInfoTable class="mb-5" />
      <TrackDetailInfoTable class="mb-5" />
    </v-layout>
  </div>
</template>

<script>
import TrackForm from '@/components/Track/TrackForm'
// import TrackHeaderStatus from '@/components/Track/TrackHeaderStatus'
import TrackGeneralInfoTable from '@/components/Track/TrackGeneralInfoTable'
import TrackDetailInfoTable from '@/components/Track/TrackDetailInfoTable'

export default {
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', disabled: true, href: '/' },
        { text: 'Track Receipt', disabled: false, href: '/' }
      ]
    }
  },
  methods: {
    cekresi() {}
  },
  components: {
    TrackForm,
    // TrackHeaderStatus,
    TrackGeneralInfoTable,
    TrackDetailInfoTable
  }
}
</script>
