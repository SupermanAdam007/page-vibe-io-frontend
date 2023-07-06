import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useAppStore = defineStore("app", {
  state: () => ({
    loading: false,
    loadingConstants: false,
    url: useStorage("url", ""),
    selectedPersona: useStorage("selectedPersona", {}),
    questions: useStorage("questions", []),
    answers: useStorage("answers", []),
    predefined_decision_making_factors: useStorage(
      "predefined_decision_making_factors",
      []
    ),
    predefined_communication_style: useStorage(
      "predefined_communication_style",
      []
    ),
    predefined_user_experience_expectations: useStorage(
      "predefined_user_experience_expectations",
      {}
    ),
    predefined_personas: useStorage("predefined_personas", []),
    predefined_questions: useStorage("predefined_questions", []),
    sentiment_score: useStorage("sentiment_score", 0),
    readibility: useStorage("readibility", 0),
    complexity: useStorage("complexity", 0),
  }),
  actions: {
    selectPredefinedPersona(persona) {
      this.selectedPersona = persona;
    },
    async fetchConstants() {
      this.loadingConstants = true

      fetch(`${import.meta.env.VITE_API_HOST}/constants`)
        .then((response) => response.json())
        .then((data) => {
          this.predefined_decision_making_factors =
            data.predefined_decision_making_factors;
          this.predefined_communication_style =
            data.predefined_communication_style;
          this.predefined_user_experience_expectations =
            data.predefined_user_experience_expectations;
          this.predefined_personas = data.predefined_personas;
          this.predefined_questions = data.predefined_questions;

          if (Object.keys(this.selectedPersona).length === 0) {
            this.selectedPersona = this.predefined_personas[0];
          }

          this.loadingConstants = false
        });
    },
    async submitUrl() {
      if (!this.url) return;

      if (this.questions.length === 0) {
        this.questions = Object.assign([], this.predefined_questions);
      }

      this.loading = true;

      fetch(`${import.meta.env.VITE_API_HOST}/url/process/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: encodeURIComponent(`https://${this.url}`),
          persona: this.selectedPersona,
          questions: this.questions,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.answers = data.answers
            .split("###")
            .map((x) => x.trim().replace(/^\d+\.\s/gm, ""));
          this.sentiment_score = data.sentiment_score;
          this.readibility = data.readibility;
          this.complexity = data.complexity;
          this.loading = false;
        });
    },
  },
});
