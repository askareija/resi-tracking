<template>
  <v-layout class="hidden-sm-and-down">
    <v-flex md4 lg4 mt-4 px-3>
      <v-card color="cyan" dark>
        <v-card-title>
          <v-icon large left>local_shipping</v-icon>
          <span class="title font-weight-light">Expedition Type</span>
        </v-card-title>

        <v-card-text class="headline title">SiCepat Express BEST(1 Hari)</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 lg4 mt-4 pr-3>
      <v-card color="teal" dark class="fill-height">
        <v-card-title>
          <v-icon large left>receipt</v-icon>
          <span class="title font-weight-light">Receipt Number</span>
        </v-card-title>

        <v-card-text class="headline title">123456</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 lg4 mt-4 pr-3>
      <v-card color="red lighten-1" dark class="fill-height">
        <v-card-title>
          <v-icon large left>hourglass_empty</v-icon>
          <span class="title font-weight-light">Status</span>
        </v-card-title>

        <v-card-text class="headline title">{{receipts.status}}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex md4 lg4 mt-4 pr-3>
      <v-card color="purple lighten-1" dark class="fill-height">
        <v-card-title>
          <v-icon large left>person</v-icon>
          <span class="title font-weight-light">Sender</span>
        </v-card-title>

        <v-card-text class="headline title">ASCARYA COMP</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    receipts: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      receiptStatus: {
        title: true,
        "red--text": true
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>