<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-chip
            v-for="(folderProp, folderPropIndex) in Object.entries(folder)"
            :key="folderPropIndex"
            :text="folderProp[0]"
            :color="'primary'"
            :class="folderPropIndex === 0 ? '' : 'ml-2'"
            :to="`#${folderProp[0]}`"
          />
        </v-card-text>
      </v-card>
    </v-col>

    <v-col
      v-for="(folderProp, folderPropIndex) in Object.entries(folder)"
      :key="folderPropIndex"
      cols="12"
    >
      <v-card :id="`${folderProp[0]}`">
        <v-card-title>
          {{ folderProp[0] }}
        </v-card-title>

        <v-card-text v-if="typeof (folderProp[1]) === 'object'">
          <v-card
            v-for="(itemProp, itemPropIndex) in Object.entries(folderProp[1] as object)"
            :key="itemPropIndex"
          >
            <v-card-title>
              {{ itemProp[0] }}
            </v-card-title>
            <v-card-text>
              {{ itemProp[1] }}

              <br><br>

              // TODO: Make this hand off the correct property to fetch subitems
              <v-btn
                v-if="itemProp[0] === 'entries'"
              >
                Fetch
              </v-btn>
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-card-text v-else>
          {{ folderProp[1] }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script
    setup
    lang="ts"
>
import type {
  FolderFull,
} from "box-typescript-sdk-gen/lib/schemas/folderFull.generated.js.js";



defineProps<{
  folder: FolderFull;
}>();
</script>
s
