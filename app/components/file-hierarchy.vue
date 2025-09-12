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
            @click="item.children"
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
  useBoxScaffoldItem,
} from "#imports";



const {
  folder,
} = defineProps<{
  folder: Items;
}>();


const items = computed(() => {
  return folder.entries?.map((item) => useBoxScaffoldItem(item));
});
</script>
