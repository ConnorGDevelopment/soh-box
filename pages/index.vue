<template>
  <v-container>
    <v-toolbar>
      <v-toolbar-title>
        Stuart's Opera House Box Portal
      </v-toolbar-title>
    </v-toolbar>
    <v-card>
      <v-card-text>
        <v-btn
          :disabled="!isReady"
          @click="() => login()"
        >
          Login with Google
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script
  lang="ts"
  setup
>
import type {
  AuthCodeFlowErrorResponse, AuthCodeFlowSuccessResponse,
} from "vue3-google-signin";



const handleOnSuccess = (response: AuthCodeFlowSuccessResponse) => {
  console.log("Access Token: ", response.access_token);
};

const handleOnError = (errorResponse: AuthCodeFlowErrorResponse) => {
  console.log("Error: ", errorResponse);
};

const {
  isReady, login,
} = useTokenClient({
  onSuccess: handleOnSuccess,
  onError: handleOnError,
});
</script>
