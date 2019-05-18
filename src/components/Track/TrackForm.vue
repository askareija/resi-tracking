<template>
  <v-form>
    <v-layout wrap>
      <v-flex xs12 sm6 md6 px-2>
        <v-text-field :counter="25" label="Receipt Number" required></v-text-field>
      </v-flex>
      <v-flex xs12 sm4 md4 px-2>
        <ExpeditionTypeItems/>
      </v-flex>
      <v-flex xs12 sm2 md2 px-2>
        <v-btn large class="primary" block>
          <v-icon left>search</v-icon>
          <span>Track</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
import ExpeditionTypeItems from "./ExpeditionTypeItems";
export default {
  components: {
    ExpeditionTypeItems
  }
};
</script>

<style lang="scss" scoped>
</style>