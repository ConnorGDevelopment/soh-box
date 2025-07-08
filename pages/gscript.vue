<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title>
    Stuart's Opera House Box Portal
      </v-toolbar-title>
    </v-toolbar>

    <form method="post" action="https://script.google.com/a/macros/stuartsoperahouse.org/s/AKfycbxpydfO0h5MC2ErmNfQ-3w7nvTTU4lDm5dtk2oB7Q_L91PcPxgFbYSMAxM0TCjS9Ncj/exec">
      <input type="file" name="fileupload"/>
    
      <input type="text" name="fname"/>
    
      <v-btn type="submit" text="submit"/>
    </form>
  </v-container>
</template>

<script lang="ts" setup>
//https://stackoverflow.com/questions/42217052/how-to-upload-a-file-via-post-dopost-to-a-google-scripts-web-app
</script>

<style>

</style>