<template>
  <div>
    <v-select
      :items="expedition_type_items"
      label="Expedition Type"
      :rules="[v => !!v || 'Expedition Type is required']"
      required
      @input="setSelected"
    ></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expedition_type_items: [
        { text: 'JNE Express', value: 'jne' },
        { text: 'TIKI', value: 'tiki' },
        { text: 'Pos Indonesia', value: 'pos' },
        { text: 'J&T Express', value: 'jnt' },
        { text: 'JET Express', value: 'jet' },
        { text: 'SAP Express', value: 'sap' },
        { text: 'SiCepat', value: 'sicepat' },
        { text: 'Wahana', value: 'wahana' },
        { text: 'RPX', value: 'rpx' },
        { text: 'PCP', value: 'pcp' }
      ]
    }
  },
  methods: {
    setSelected(value) {
      this.$store.commit('SET_EXP_TYPE', value)
    }
  }
}
</script>

<style lang="scss" scoped></style>
