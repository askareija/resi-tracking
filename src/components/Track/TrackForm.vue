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
    }
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        alert('The form is valid')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
