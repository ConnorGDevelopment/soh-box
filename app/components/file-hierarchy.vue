<template>
  <v-row>
    <v-col
      v-for="item in items"
      :key="item.id"
      cols="12"
    >
      <v-card>
        <v-card-title> {{ item.name }} </v-card-title>
        <v-card-actions>
          <v-btn
            variant="tonal"
            @click="item.expand"
          >
            Expand
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import type {
  Items,
} from "box-typescript-sdk-gen/lib/schemas/items.generated";
import {
  BoxScaffoldItem,
} from "~/types/box-scaffold";



const {
  boxRoot,
} = defineProps<{
  boxRoot: Items;
}>();


// TODO: Making better scaffolding in box-scaffold.ts
const items = computed(() => {
  return (boxRoot.entries
    ? boxRoot.entries
    : []).map((item) => new BoxScaffoldItem(item));
});
</script>
