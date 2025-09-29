<template>
  <v-card-text>
    <FileExterior
      v-for="(child, index) in items"
      :key="index"
      :item="child"
    />
  </v-card-text>
</template>

<script lang="ts" setup>
import type {
  BoxScaffoldItem,
} from "#imports";
import FileExterior from "./file-exterior.vue";



const {
  item,
} = defineProps<{
  item: BoxScaffoldItem;
}>();

const items = computed(() => item.children.map((child) => useBoxScaffoldItem(child)));
</script>
