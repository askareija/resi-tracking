<template>
  <div>
    <v-breadcrumbs :items="breadcrumbs">
      <template v-slot:divider>
        <v-icon>chevron_right</v-icon>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { text: "Home", disabled: true, href: "/" },
        { text: "Settings", disabled: false, href: "/settings" }
      ]
    };
  }
};
</script>
