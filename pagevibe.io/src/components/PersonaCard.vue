<template>
  <v-card :elevation="6" @click="onClick" style="max-width: 1000px;">
    <v-row v-if="!loadingConstants" no-gutters class="align-center justify-center">
      <v-col cols="auto">
        <div class="text-center pb-1" style="background-color: #3ce36ead; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px;">
          <v-card-title class="pb-0 pt-1" style="line-height: 1.5rem;">{{ persona.name }} · {{ persona.occupation }}</v-card-title>
          <v-card-subtitle class="pb-0">Age: {{ persona.age }}, Gender: {{ persona.gender }}</v-card-subtitle>
        </div>
        <v-img :src="persona.avatar" width="300px" :alt="'Avatar-' + persona.name" cover style="margin-bottom: -10px; " />
      </v-col>
      <v-col cols="12" md="8" class="pl-2 pr-2 pl-sm-12">

        <h4 class="mt-4">"{{ persona.description }}"</h4>

        <v-list :lines="false" density="compact" class="pt-2">
          <v-list-item>
            <v-list-item-title>
              <h5>Education ({{ persona.education_level }})</h5>
              <v-slider class="pb-1 mt-n2" readonly hide-details density="compact" color="primary" :model-value="persona.education_level * 10" style="height: 30px; max-width: 500px;"></v-slider>
            </v-list-item-title>
            <v-list-item-title>
              <h5>Income ({{ persona.income_level }})</h5>
              <v-slider class="pb-1 mt-n2" readonly hide-details color="primary" :model-value="persona.income_level * 10" style="height: 30px; max-width: 500px;"></v-slider>
            </v-list-item-title>
            <v-list-item-title>
              <h5>Tech knowledge ({{ persona.tech_proficiency }})</h5>
              <v-slider class="pb-1 mt-n2" readonly hide-details color="primary" :model-value="persona.tech_proficiency * 10" style="height: 30px; max-width: 500px;"></v-slider>
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <div class="ml-4">
          <h5>Decision Making Factors</h5>
          <v-chip v-for="dmf in persona.decision_making_factors" :key="dmf" density="comfortable" color="secondary">{{ dmf }}</v-chip>

          <h5 class="mt-2">Communication Style</h5>
          <v-chip v-for="cs in persona.communication_style" :key="cs" density="comfortable" color="primary">{{ cs }}</v-chip>
        </div>

        <div class="mb-4"></div>
      </v-col>
    </v-row>

    <div v-else style="width: 100%" class="text-center">
      <v-progress-circular color="primary" class="ma-8" :size="100" :width="12" indeterminate></v-progress-circular>
    </div>

  </v-card>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '@/store/app'

export default {
  props: {
    persona: Object,
  },
  computed: {
    ...mapState(useAppStore, ['loadingConstants'])
  },
  methods: {
    ...mapActions(useAppStore, ['selectPredefinedPersona']),
    onClick() {
      this.selectPredefinedPersona(this.persona)
    }
  }
};
</script>

<style>
.description {
  color: #666;
  word-break: break-word;
}
</style>
