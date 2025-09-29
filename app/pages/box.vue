<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <FileHierarchy
          v-if="boxRootFolder?.data"
          :folder="boxRootFolder.data"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import type {
  Items,
} from "box-typescript-sdk-gen/lib/schemas/items.generated.js.js";



const {
  data: boxRootFolder,
} = await useAsyncData<{
  statusCode: number;
  data: Items;
}>("box-root", () => $fetch("/api/box/get-folder-items",
  {
    method: "POST",
  }));
</script>
