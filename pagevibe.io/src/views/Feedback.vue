<template>
  <v-container>
    <v-row no-gutters class="align-center justify-center my-4">
      <v-col cols="12">
        <UrlInput style="max-width: 650px;" class="mx-auto" />
      </v-col>
    </v-row>

    <PersonaCard class="mb-8" :avatar="persona.avatar" :name="persona.name" :description="persona.description" />

    <h1>Feedback</h1>
    <div>
      <TextFeedback v-for="qa in qas" :key="qa.question" :question="qa.question" :answer="qa.answer" class="mb-2" />
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '@/store/app'

import PersonaCard from '@/components/PersonaCard.vue';
import TextFeedback from '@/components/TextFeedback.vue'
import UrlInput from '@/components/UrlInput.vue'


export default {
  components: { PersonaCard, TextFeedback, UrlInput },
  computed: {
    ...mapState(useAppStore, ['url', 'persona', 'qas']),
  },
  methods: {
    ...mapActions(useAppStore, ['fetchConstants']),
  },
  mounted() {
    this.fetchConstants()
  }
}
</script>
