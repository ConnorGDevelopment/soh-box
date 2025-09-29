<template>
  <v-card>
    <v-card-title> {{ item.name }} </v-card-title>
    <FileInterior :item="item" />
    <v-card-actions v-if="item.src?.type === 'folder'">
      <v-btn
        variant="tonal"
        @click="async() => await item.fetchChildren()"
      >
        Expand
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts" setup>
import type {
  BoxScaffoldItem,
} from "#imports";



const {
  item,
} = defineProps<{
  item: BoxScaffoldItem;
}>();
</script>
