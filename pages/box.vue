<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            box-node-sdk
            <v-btn
              @click="testNode()"
              color="primary"
            >
              Test
            </v-btn>
          </v-card-title>

          <v-card-text>
            {{ testNodeData }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            box-typescript-sdk-gen
            <v-btn
              @click="testTs()"
              color="primary"
            >
              Test
            </v-btn>
          </v-card-title>

          <v-card-text>
            {{ testTsData }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- <v-row
        class="ma-0"
        v-if="testData && typeof testData === 'object'"
      >
        <v-col
          cols="12"
          v-for="(item, index) in Object.entries(testData)"
          :key="index"
        >
          <v-card>
            <v-card-text>
              <v-template
                v-for="(subitem, index) in Object.entries(item)"
                :key="index"
              >
                {{ subitem }}
                <v-divider />
              </v-template>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row> -->
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

// const { data: boxRoot, error: boxError } = await useAsyncData('collections', () => $fetch('/api/box/read'))
// async function test() {
//   const _refetch = await useFetch('/api/box/read')
//   boxRoot.value = _refetch.data.value;
//   boxError.value = _refetch.error.value as any;
// }

const testNodeData: Ref<any> = ref(null);
async function testNode() {
  await useFetch('/api/box/node.read').then((res) => testNodeData.value = res)
}
const testTsData: Ref<any> = ref(null);
async function testTs() {
  await useFetch('/api/box/ts.read').then((res) => testTsData.value = res)
}
</script>
