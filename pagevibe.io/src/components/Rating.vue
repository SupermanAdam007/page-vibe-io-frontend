<template>
  <div class="score-progress-bar">
    <div class="label">{{ label }}</div>
    <v-progress-circular
      color="primary"
      :size="100"
      :width="12"
      :model-value="normalizedScore"
      :indeterminate="loading"
    >
      <div v-show="!loading" class="score">{{ score }}</div>
    </v-progress-circular>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useAppStore } from '@/store/app'

export default {
  props: {
    label: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true,
      validator: (value) => value >= 1 && value <= 10
    }
  },
  computed: {
    ...mapState(useAppStore, ['loading']),
    normalizedScore() {
      return (this.score) * 10
    }
  }
}
</script>

<style scoped>
.score-progress-bar {
  text-align: center;
}

.label {
  font-size: 16px;
  margin-bottom: 8px;
}

.score {
  font-size: 24px;
  font-weight: bold;
}
</style>
