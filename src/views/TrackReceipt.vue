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
  computed: {
    receipt() {
      return this.$store.state.receipt
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
