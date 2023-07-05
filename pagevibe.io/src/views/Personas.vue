<template>
  <v-container style="max-width: 1000px;">
    <div class="text-right">
      <v-btn color="primary" append-icon="mdi-arrow-right" @click="submitAndRedirect">
        Submit
      </v-btn>
    </div>

    <h1 class="mb-2">Selected Persona</h1>
    <PersonaCard class="mb-8" :avatar="selectedPersona.avatar" :persona="selectedPersona" />

    <h1 class="mb-2">Other Personas</h1>
    <div>
      <PersonaCard v-for="predefined_persona in predefined_personas" :key="predefined_persona.id" :persona="predefined_persona" class="mb-4" />
    </div>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '@/store/app'

import PersonaCard from '@/components/PersonaCard.vue';


export default {
  components: { PersonaCard },
  computed: {
    ...mapState(useAppStore, ['url', 'selectedPersona', 'predefined_personas']),
  },
  methods: {
    ...mapActions(useAppStore, ['fetchConstants', 'submitUrl']),
    submitAndRedirect() {
      this.submitUrl()
      this.$router.push(`/feedback?url=https://${this.url}`)
    }
  },
  mounted() {
    if (this.predefined_personas.length === 0) {
      this.fetchConstants()
    }
  }
}
</script>
