<template>
  <v-card variant="outlined" :elevation="0">
    <v-card-title class="text-pre-wrap" style="line-height: 1.4rem;">
      <v-progress-circular
      v-show="loading"
      color="primary"
      class="mt-n1 mr-4"
      :size="20"
      :width="4"
      :indeterminate="loading"
    ></v-progress-circular>
    <span>{{ question }}</span>
    </v-card-title>
    <v-card-text>
      <p v-show="!loading">{{ answer }}</p>
    </v-card-text>
    
  </v-card>
</template>

<script>
import { mapState } from 'pinia'
import { useAppStore } from '@/store/app'

export default {
  props: {
    question: String,
    answer: String,
  },
  computed: {
    ...mapState(useAppStore, ['loading']),
  }
};
</script>
