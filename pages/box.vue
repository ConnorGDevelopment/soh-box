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
const active = ref([
]);

const open = ref([
]);

const { data: boxFetchData } = await useAsyncData(
  'root-folder',
  () => $fetch(
    '/api/box/read',
    { method: 'POST' },
  ),
);

const { data: test } = await useAsyncData('test', () => $fetch('/api/box/get-folder', { method: 'POST' }));

async function replaceFolder(target: unknown) {
  if (
    typeof target === 'object'
    && target !== null
    && ('id' in target)
    && boxFetchData.value?.data
  ) {
    const res = await $fetch(
      '/api/box/read',
      {
        method: 'POST',
        body: { id: target?.id }
      },
    );

    if (
      res?.data !== undefined
      && boxFetchData.value?.data
    ) {
      const index = boxFetchData.value.data.findIndex((item) => item.id === target.id);

      console.log(boxFetchData.value.data[index]);

      if (
        index > -1
        && 'itemCollection' in boxFetchData.value.data[index]
        && typeof boxFetchData.value.data[index].itemCollection === 'object'
      ) {
        const match = {
          ...boxFetchData.value.data[index],
          itemCollection: {
            ...boxFetchData.value.data[index].itemCollection,
            entries: res.data.entries
          }
        };

        boxFetchData.value.data.splice(
          index,
          1,
          match,
        );
      }
    }
  }
}
</script>
