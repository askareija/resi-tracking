<template>
  <v-form ref="form" v-model="valid">
    <v-layout wrap>
      <!-- NO RESI FIELD -->
      <v-flex xs12 sm6 md6 px-2>
        <v-text-field
          :counter="25"
          v-model="noResi"
          :rules="noResiRules"
          label="Receipt Number"
          required
        ></v-text-field>
      </v-flex>

      <!-- EXPEDITION TYPE FIELD -->
      <v-flex xs12 sm4 md4 px-2>
        <ExpeditionTypeItems />
      </v-flex>

      <!-- SUBMIT BUTTON -->
      <v-flex xs12 sm2 md2 px-2>
        <v-btn large class="primary" block :disabled="!valid" @click="validate">
          <v-icon left>search</v-icon>
          <span>Track</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import ExpeditionTypeItems from './ExpeditionTypeItems'
import axios from 'axios'

export default {
  data() {
    return {
      valid: true,
      noResiRules: [
        v => !!v || 'Receipt Number is required',
        v => v.length >= 6 || 'Receipt Number must be more than 6 characters'
      ]
    }
  },
  components: {
    ExpeditionTypeItems
  },
  computed: {
    noResi: {
      get() {
        return this.$store.state.noResi
      },
      set(value) {
        this.$store.commit('SET_NO_RESI', value)
      }
    },
    expType: {
      get() {
        return this.$store.state.expType
      }
    }
  },
  methods: {
    async validate() {
      if (this.$refs.form.validate()) {
        await axios
          .post('http://localhost:3000/tracks', {
            no_resi: this.noResi,
            expedition_type: this.expType
          })
          .then(response => {
            this.$store.dispatch('setReceipt', response.data)
          })
          .catch(error => {
            alert(
              'Receipt not found or something wrong with the expedition server'
            )
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
