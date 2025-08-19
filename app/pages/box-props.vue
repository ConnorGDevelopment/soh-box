<template>
  <v-container>
    <PropDisplay
      v-if="boxRoot?.data"
      :folder="boxRoot.data"
    />
  </v-container>
</template>

<script
  lang="ts"
  setup
>
const {
  data: boxRoot,
} = await useAsyncData("box-root", () => $fetch("/api/box/get-folder-items", {
  method: "POST",
}));


// // TODO: This should accept boxData.data as a parameter but it doesn't bc typing
// async function expandFolder(parent: typeof boxRoot.value) {
//   if(
//     typeof (parent) !== "undefined"
//     && parent.data
//     && parent.data.itemCollection
//     && parent.data.itemCollection.entries) {
//     const promises: Promise<SerializedData>[] = parent.data.itemCollection.entries.map((item) => $fetch("/api/box/get-folder", {
//       method: "POST",
//       params: {
//         id: item.id,
//       },
//     }));

//     const res = await Promise.all(promises);
//     return res;
//   }
// }
</script>
