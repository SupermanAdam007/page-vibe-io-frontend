<template>
  <v-container>
    <h2>Selected Persona</h2>
    <PersonaCard class="mb-8" :avatar="selectedPersona.avatar" :persona="selectedPersona" />

    <h2>Personas</h2>
    <div>
      <PersonaCard v-for="predefined_persona in predefined_personas" :key="predefined_persona.id" :persona="predefined_persona" class="mb-2" />
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
    ...mapState(useAppStore, ['selectedPersona', 'predefined_personas']),
  },
  methods: {
    ...mapActions(useAppStore, ['fetchConstants']),
  },
  mounted() {
    if (this.predefined_personas.length === 0) {
      this.fetchConstants()
    }
  }
}
</script>
