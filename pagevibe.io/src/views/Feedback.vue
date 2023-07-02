<template>
  <v-container>
    <v-row no-gutters class="align-center justify-center my-4">
      <v-col cols="12">
        <UrlInput style="max-width: 650px;" class="mx-auto" />
      </v-col>
    </v-row>

    <VirtualPersonaCard class="mb-8" :avatar="persona.avatar" :name="persona.name" :description="persona.description" />

    <h1>Feedback</h1>
    <div>
      <TextFeedback v-for="qa in qas" :key="qa.question" :question="qa.question" :answer="qa.answer" class="mb-2" />
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'pinia'
import { useAppStore } from '@/store/app'

import VirtualPersonaCard from '@/components/VirtualPersonaCard.vue';
import TextFeedback from '@/components/TextFeedback.vue'
import UrlInput from '@/components/UrlInput.vue'


export default {
  components: { VirtualPersonaCard, TextFeedback, UrlInput },
  computed: {
    ...mapState(useAppStore, ['url', 'persona', 'qas']),
  },
}
</script>
