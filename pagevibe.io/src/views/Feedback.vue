<template>
  <v-container style="max-width: 1000px;">
    <v-row no-gutters class="align-center justify-center my-4">
      <v-col cols="12">
        <UrlInput class="mx-auto" />
      </v-col>
    </v-row>

    <v-row no-gutters class="align-center justify-center mb-4">
      <v-col cols="12">
        <PersonaCard class="mx-auto" :persona="selectedPersona" />
      </v-col>
    </v-row>

    <h1 class="mt-4">Rating</h1>
    <p class="mb-2 mt-n2" style="font-size: small;">Not personalized (<a target="_blank" href="/info">read more</a>)</p>
    <v-row no-gutters class="align-center justify-center mb-4">
      <v-col cols="4">
        <Rating label="Sentiment" :score="sentiment_score" />
      </v-col>
      <v-col cols="4">
        <Rating label="Readibility" :score="readibility" />
      </v-col>
      <v-col cols="4">
        <Rating label="Complexity" :score="complexity" />
      </v-col>
    </v-row>

    <h1>Feedback</h1>
    <p class="mb-2 mt-n2" style="font-size: small;">Highly personalized (<a target="_blank" href="/info">read more</a>)</p>
    <div>
      <TextFeedback v-for="(question, index) in questions" :key="index" :question="question" :answer="answers[index]" class="mb-2" />
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '@/store/app'

import PersonaCard from '@/components/PersonaCard.vue';
import TextFeedback from '@/components/TextFeedback.vue'
import UrlInput from '@/components/UrlInput.vue'
import Rating from '@/components/Rating.vue'


export default {
  components: { PersonaCard, TextFeedback, UrlInput, Rating },
  computed: {
    ...mapState(useAppStore, ['url', 'selectedPersona', 'questions', 'answers', 'sentiment_score', 'readibility', 'complexity']),
  },
  methods: {
    ...mapActions(useAppStore, ['fetchConstants']),
  },
  mounted() {
    this.fetchConstants()
  }
}
</script>
