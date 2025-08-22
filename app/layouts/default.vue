<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title

        @click="navigateTo('/')"
      >
        Stuart's Opera House Box Portal
      </v-toolbar-title>
    </v-toolbar>
    <slot />
  </v-app>
</template>
