<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <FileHierarchy
          v-if="boxRoot.data.value"
          :box-root="boxRoot.data.value.data"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {
  deserializeItems,

} from "box-typescript-sdk-gen/lib/schemas/items.generated.js.js";
import type {
  Items,
} from "box-typescript-sdk-gen/lib/schemas/items.generated.js.js";
import {
  deserializeFolderFull,

} from "box-typescript-sdk-gen/schemas/folderFull.generated";
import type {
  FolderFull,
} from "box-typescript-sdk-gen/schemas/folderFull.generated";



// const boxRoot = await useAsyncData("box-root", async () => {
//   const _boxRoot = await $fetch("/api/box/get-folder-items", {
//     method: "POST",
//   });

//   return _boxRoot;
// });


const boxData: Ref<any[]> = ref([]);

const boxRoot = await useAsyncData<{
  statusCode: number;
  data: Items;
}>("box-root", () => $fetch("/api/box/get-folder-items", {
  method: "POST",
}));

// await callOnce(async () => {
//   boxData.value.push(boxRoot.data);
// }, {
//   mode: "render",
// });
</script>
