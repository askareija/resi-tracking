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

<<<<<<< HEAD
    <TrackHeaderStatus class="mt-5" v-bind:receipts="receipts" />
    <v-layout wrap class="mt-5">
      <TrackGeneralInfoTable />
      <TrackDetailInfoTable />
=======
    <!-- <TrackHeaderStatus class="mt-5" v-bind:receipts="receipts" /> -->
    <v-layout wrap class="mt-5">
      <TrackGeneralInfoTable
        class="mb-5"
        :receipt="receipt"
        v-if="receipt != ''"
      />
      <TrackDetailInfoTable
        class="mb-5"
        :receiptDetail="receipt.details"
        v-if="receipt != null"
      />
>>>>>>> 4-tracking-function
    </v-layout>
  </div>
</template>

<script>
import TrackForm from '@/components/Track/TrackForm'
<<<<<<< HEAD
import TrackHeaderStatus from '@/components/Track/TrackHeaderStatus'
=======
// import TrackHeaderStatus from '@/components/Track/TrackHeaderStatus'
>>>>>>> 4-tracking-function
import TrackGeneralInfoTable from '@/components/Track/TrackGeneralInfoTable'
import TrackDetailInfoTable from '@/components/Track/TrackDetailInfoTable'

export default {
  data() {
    return {
<<<<<<< HEAD
      receipts: {
        no_resi: '',
        expedition_type: '',
        isReceived: false,
        status: 'ON PROCESS',
        details: [{}]
      },
      isLoading: false,
=======
>>>>>>> 4-tracking-function
      breadcrumbs: [
        { text: 'Home', disabled: true, href: '/' },
        { text: 'Track Receipt', disabled: false, href: '/' }
      ]
    }
  },
<<<<<<< HEAD
  methods: {
    cekresi() {
      alert(
        'No Resi: ' +
          this.receipts.no_resi +
          ', Tipe Ekspedisi: ' +
          this.receipts.expedition_type
      )
=======
  computed: {
    receipt() {
      return this.$store.state.receipt
>>>>>>> 4-tracking-function
    }
  },
  methods: {},
  components: {
    TrackForm,
    // TrackHeaderStatus,
    TrackGeneralInfoTable,
    TrackDetailInfoTable
  }
}
</script>
