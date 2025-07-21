<template>
  <v-container>
    <v-card>
      <v-card-title>
        <v-btn
          @click="test()"
          color="primary"
        > Fetch </v-btn>
      </v-card-title>
      <v-row
        class="ma-0"
        v-if="boxRoot"
      >
        <v-col
          cols="12"
          v-for="boxItem in boxRoot.entries"
          :key="boxItem.id"
        >
          <v-card>
            <v-card-text>
              <v-template
                v-for="boxProp in Object.entries(boxItem)"
                :key="boxProp[0]"
              >
                {{ boxProp }}
                <v-divider />
              </v-template>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
// const { signOut } = useAuth();
// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const { data: token } = await useFetch('/api/token', { headers })
// const { data } = useAuthState();

// const test = ref()
// async function testGet() {
//   test.value = await useFetch('/api/verify-token', { headers });
// }

const { data: boxRoot, error: boxError } = await useAsyncData('collections', () => $fetch('/api/box/read'))
async function test() {
  const _refetch = await useFetch('/api/box/read')
  boxRoot.value = _refetch.data.value;
  boxError.value = _refetch.error.value as any;
}
</script>
