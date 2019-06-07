<template>
  <v-flex xs12>
    <v-card>
      <v-card-title class="blue white--text">
        <v-icon left>assignment</v-icon>
        <h4>General Information</h4>
      </v-card-title>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile>
          <v-list-tile-content>Nomor Resi:</v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ receipt.no_resi || '-' }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Status:</v-list-tile-content>
          <v-list-tile-content class="align-end">{{
            receipt.status || '-'
          }}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Service:</v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ receipt.expedition_type || '-' }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Tanggal Pengiriman:</v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ receipt.date || '-' }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Pengirim:</v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ receipt.sender || '-' }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Dikirim Dari:</v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ receipt.origin || '-' }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Penerima:</v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ receipt.recipient || '-' }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>Alamat:</v-list-tile-content>
          <v-list-tile-content class="align-end">
            {{ receipt.recipient_address || '-' }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    receipt: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped></style>
