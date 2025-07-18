<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-btn @click="testGet()"> Test </v-btn>

        {{ token }}
      </v-card-text>

      <v-btn @click="signOut()"> Sign Out </v-btn>
    </v-card>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
const { signOut } = useAuth();
const headers = useRequestHeaders(['cookie']) as HeadersInit
const { data: token } = await useFetch('/api/token', { headers })
const { data } = useAuthState();

const test = ref()
async function testGet() {
  test.value = await useFetch('/api/verify-token', { headers });
}
</script>
