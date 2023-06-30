<template>
  <v-card variant="outlined" :elevation="0">
    <v-card-title class="text-pre-wrap" style="line-height: 1.4rem;">
      {{ question }}
    </v-card-title>
    <v-card-text>
      {{ answer }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    question: String,
    answer: String,
  },
};
</script>
