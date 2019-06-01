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

    <TrackHeaderStatus class="mt-5" v-bind:receipts="receipts" />
    <v-layout wrap class="mt-5">
      <TrackGeneralInfoTable />
      <TrackDetailInfoTable />
    </v-layout>
  </div>
</template>

<script>
import TrackForm from '@/components/Track/TrackForm'
import TrackHeaderStatus from '@/components/Track/TrackHeaderStatus'
import TrackGeneralInfoTable from '@/components/Track/TrackGeneralInfoTable'
import TrackDetailInfoTable from '@/components/Track/TrackDetailInfoTable'

export default {
  data() {
    return {
      receipts: {
        no_resi: '',
        expedition_type: '',
        isReceived: false,
        status: 'ON PROCESS',
        details: [{}]
      },
      isLoading: false,
      breadcrumbs: [
        { text: 'Home', disabled: true, href: '/' },
        { text: 'Track Receipt', disabled: false, href: '/' }
      ]
    }
  },
  methods: {
    cekresi() {
      alert(
        'No Resi: ' +
          this.receipts.no_resi +
          ', Tipe Ekspedisi: ' +
          this.receipts.expedition_type
      )
    }
  },
  components: {
    TrackForm,
    TrackHeaderStatus,
    TrackGeneralInfoTable,
    TrackDetailInfoTable
  }
}
</script>
