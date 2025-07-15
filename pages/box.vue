<template>
  <v-container>
    <v-card>
      <v-card-text>
        Box Dashboard
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: "/auth/signin",
  },
});
</script>
