<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-btn @click="signIn('google', { callbackUrl: '/box' })">
          Login with Google
        </v-btn>
        <v-btn @click="navigateTo('/box')">
          To Box
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
const {
  signIn,
} = useAuth();

definePageMeta({
  auth: false
});
</script>
