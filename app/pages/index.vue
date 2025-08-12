<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-btn
          :color="color"
          @click="test()"
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
const {
  signIn,
} = useAuth();


const color = ref("red");
const secret = computed(() => Math.random());

async function test() {
  // await signIn('google', { callbackUrl: '/box' })
  if (color.value !== "red") {
    color.value = "red";
  } else {
    color.value = "blue";
  }
}
</script>
