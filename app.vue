<template>
  <NuxtLayout>
    <v-app>
      <v-toolbar>
        <v-toolbar-title @click="navigateTo('/')">
          Stuart's Opera House Box Portal
        </v-toolbar-title>
      </v-toolbar>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>

<script
  lang="ts"
  setup
>

import { navigateTo } from '#app';

</script>