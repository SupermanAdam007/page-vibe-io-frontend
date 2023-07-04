<template>
  <v-card :elevation="6" @click="onClick">
    <v-row no-gutters class="align-center justify-center">
      <v-col cols="auto">
        <v-img :src="persona.avatar" class="mx-auto" height="300px" width="300px" :alt="'Avatar-' + persona.name" cover />
      </v-col>
      <v-col cols="12" sm="8">
        <v-card-title class="pb-0">{{ persona.name }} · {{ persona.occupation }}</v-card-title>
        <!-- <v-card-text>
        </v-card-text> -->
        <v-list :lines="false" density="compact" class="pt-0">
          <v-list-item>
            <!-- <v-list-item-title style="font-size: small;">Age: {{ persona.age }}</v-list-item-title>
              <v-list-item-title style="font-size: small;">Gender: {{ persona.gender }}</v-list-item-title>
              <v-list-item-title style="font-size: small;">Education: {{ persona.education_level }}</v-list-item-title>
              <v-list-item-title style="font-size: small;">Income: {{ persona.income_level }}</v-list-item-title>
              <v-list-item-title style="font-size: small;">Tech knowledge: {{ persona.tech_proficiency }}</v-list-item-title> -->
            <v-list-item-title style="font-size: small;">Age: {{ persona.age }}, Gender: {{ persona.gender }} </v-list-item-title>
            <v-list-item-title style="font-size: small;">
              <div class="mt-1">Education ({{ persona.education_level }}):</div>
              <v-slider class="pb-1" readonly hide-details density="compact" color="primary" :model-value="persona.education_level * 10"></v-slider>
            </v-list-item-title>
            <v-list-item-title style="font-size: small;">
              <div class="mt-1">Income ({{ persona.income_level }}):</div>
              <v-slider class="pb-1" readonly hide-details color="primary" :model-value="persona.income_level * 10"></v-slider>
            </v-list-item-title>
            <v-list-item-title style="font-size: small;">
              <div class="mt-1">Tech knowledge ({{ persona.tech_proficiency }}):</div>
              <v-slider class="pb-1" readonly hide-details color="primary" :model-value="persona.tech_proficiency * 10"></v-slider>
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


  </v-card>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '@/store/app'

export default {
  props: {
    persona: Object,
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
