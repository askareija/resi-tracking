<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12 sm4 md4 px-2>
        <v-text-field
          :counter="25"
          label="Receipt Number"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm4 md4 px-2>
        <ExpeditionTypeItems />
      </v-flex>
      <v-flex xs12 sm2 md2 px-2>
        <v-btn large class="secondary" block>
          <v-icon left>chrome_reader_mode</v-icon>
          <span>History</span>
        </v-btn>
      </v-flex>
      <v-flex xs12 sm2 md2 px-2>
        <v-btn large class="primary" block>
          <v-icon left>search</v-icon>
          <span>Track</span>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-btn
      :disabled="dialog"
      :loading="dialog"
      class="white--text"
      color="purple darken-2"
      @click="dialog = true"
      >Start loading</v-btn
    >
    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import ExpeditionTypeItems from './ExpeditionTypeItems'
export default {
  data() {
    return {
      dialog: false
    }
  },
  components: {
    ExpeditionTypeItems
  },
  watch: {
    // dialog(val) {
    //   if (!val) return
    //   setTimeout(() => (this.dialog = false), 4000)
    // }
  }
}
</script>

<style lang="scss" scoped></style>
