<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-btn @click="signIn('google', { callbackUrl: '/box' })">
          Login with Google
        </v-btn>
        <v-btn :to="'/box'">
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

async function test() {
  await signIn('google', { callbackUrl: '/box' })
}
</script>
