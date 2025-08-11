<template>
  <v-container>
    <v-row
      v-if="boxFetchData?.data"
      class="ma-0"
    >
      <v-treeview
        v-model:activated="active"
        v-model:opened="open"
        :items="boxFetchData.data"
        item-title="name"
        item-children="itemCollection.entries"
        :load-children="replaceFolder"
        item-value="id"
        activatable
        open-on-click
      />
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
// const { signOut } = useAuth();
// const headers = useRequestHeaders(['cookie']) as HeadersInit
// const { data: token } = await useFetch('/api/token', { headers })
// const { data } = useAuthState();

// const test = ref()
// async function testGet() {
//   test.value = await useFetch('/api/verify-token', { headers });
// }

const active = ref([
]);
const open = ref([
]);

// const items = computed(() => reformatBoxItems(boxData.value?.data as FileFullOrFolderMiniOrWebLink[]))
// const { data: boxFetchData } = await useAsyncData('root-folder', () => $fetch('/api/box/read', { method: 'POST' }), { 'transform': (res) => ({ ...res, data: res?.data?.map(item => item.type === 'folder' ? { ...item, entries: [] } : item) }) })
const {
  data: boxFetchData,
} = await useAsyncData("root-folder", () => $fetch("/api/box/read", {
  method: "POST",
}));
// const boxData: Ref<FileFullOrFolderMiniOrWebLink[]> = ref([])



async function replaceFolder(target: unknown) {
  if (
    typeof target === "object"
    && target !== null && ("id" in target)
    && boxFetchData.value?.data
  ) {
    const res = (await $fetch("/api/box/read", {
      method: "POST",
      body: {
        id: target?.id,
      },
    }));
    if (
      res?.data !== undefined
      && boxFetchData.value?.data
    ) {
      const index = boxFetchData.value.data.findIndex((item) => item.id === target.id);

      console.log(boxFetchData.value.data[index]);
      if (
        index > -1
        && "itemCollection" in boxFetchData.value.data[index]
        && typeof boxFetchData.value.data[index].itemCollection === "object"
      ) {
        const match = {
          ...boxFetchData.value.data[index],
          itemCollection: {
            ...boxFetchData.value.data[index].itemCollection,
            entries: res.data.entries,
          },
        };
        boxFetchData.value.data.splice(
          index, 1, match,
        );
      }
      // const index = boxData.value.findIndex(item => item.id === target.id && item instanceof Folder);
      // if (index > -1 && boxData.value[index] instanceof Folder) {
      //   const match = { ...boxData.value[index], itemCollection: { ...boxData.value[index].itemCollection, entries: res.data.entries } }
      //   boxData.value.splice(index, 1, match);
      // }
    }
  }
}
</script>
