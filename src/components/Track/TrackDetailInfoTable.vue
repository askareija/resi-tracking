<template>
  <v-flex>
    <v-card>
      <v-card-title class="font-weight-bold green white--text">
        <v-icon left>description</v-icon>
        <span>Track Information Details</span>
      </v-card-title>
      <v-data-table :headers="headers" :items="receiptDetail" :search="search">
        <template v-slot:items="props">
          <td>{{ props.item.date }}</td>
          <td>{{ props.item.city }}</td>
          <td>{{ props.item.description }}</td>
        </template>
      </v-data-table>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    receiptDetail: {
      type: Array
    }
  },
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Date',
          value: 'date',
          align: 'left'
        },
        { text: 'City', value: 'city', align: 'left' },
        { text: 'Description', value: 'description', align: 'left' }
<<<<<<< HEAD
      ],
      details: [
        {
          date: '2017-01-01 13:20',
          city: 'BANDUNG',
          description: 'WITH DELIVERY COURIER'
        }
=======
>>>>>>> 4-tracking-function
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
