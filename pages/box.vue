<template>
  <v-container>
    <v-row
      class="ma-0"
      v-if="boxData?.data"
    >
      <v-treeview
        v-model:activated="active"
        v-model:opened="open"
        :items="items"
        item-title="name"
        :item-props="true"
        item-children="entries"
        :load-children="readFolder"
      >

      </v-treeview>
      <!-- 
      <v-col
        cols="12"
        v-for="(item, index) in Object.values(boxData.data).entries"
        :key="index"
      >
        <v-card>
          <v-card-title>
            {{ item.name }}
          </v-card-title>
          <v-card-text>
            <v-template
              v-for="(subitem, index) in Object.entries(item)"
              :key="index"
            >
              {{ subitem }}
              <v-divider />
            </v-template>
          </v-card-text>
          <v-card-actions v-if="item.type === 'folder'">
            <v-btn @click="readFolder(item)">
              Test
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
import type { FileFullOrFolderMiniOrWebLink } from 'box-typescript-sdk-gen/lib/schemas/fileFullOrFolderMiniOrWebLink.generated'

// const { signOut } = useAuth();
// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const { data: token } = await useFetch('/api/token', { headers })
// const { data } = useAuthState();

// const test = ref()
// async function testGet() {
//   test.value = await useFetch('/api/verify-token', { headers });
// }

const active = ref([])
const open = ref([])

function reformatBoxItems(items: FileFullOrFolderMiniOrWebLink[]) {
  return items.map((item) => item.type === 'folder' ? { ...item, entries: [] } : item)
}
const items = computed(() => reformatBoxItems(boxData.value?.data as FileFullOrFolderMiniOrWebLink[]))

const { data: boxData } = await useAsyncData('root-folder', () => $fetch('/api/box/read', { method: 'POST' }))
async function readFolder(item: FileFullOrFolderMiniOrWebLink) {
  if (item) {
    const _data = await $fetch('/api/box/read', { method: 'POST', body: { id: item.id } })
    console.log(_data);
    return _data?.data;
  }
}
</script>
