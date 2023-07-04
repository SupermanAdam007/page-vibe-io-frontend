// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    url: "",
    selectedPersona: {},
    qas: [
      {
        question: "How would you rate the overall user experience of the website?",
        answer: "I found the user experience to be excellent. The website was easy to navigate, and the interface was intuitive."
      },
      {
        question: "Were you able to find the information you were looking for?",
        answer: "Yes, I was able to find the information I needed quickly. The website's search function was helpful in locating specific content."
      },
      {
        question: "What do you like?",
        answer: "The emphasis on maximizing resource utilization within a company, such as office spaces, parking spots, company cars, and shared items."
      },
      {
        question: "What do you like?",
        answer: "The emphasis on maximizing resource utilization within a company, such as office spaces, parking spots, company cars, and shared items."
      },
      {
        question: "What do you like?",
        answer: "The emphasis on maximizing resource utilization within a company, such as office spaces, parking spots, company cars, and shared items."
      },
      {
        question: "What do you like?",
        answer: "The emphasis on maximizing resource utilization within a company, such as office spaces, parking spots, company cars, and shared items."
      },
      {
        question: "What do you like?",
        answer: "The emphasis on maximizing resource utilization within a company, such as office spaces, parking spots, company cars, and shared items."
      },
    ],
    predefined_decision_making_factors: [],
    predefined_communication_style: [],
    predefined_user_experience_expectations: {},
    predefined_personas: [],
    predefined_questions: [],
  }),
  actions: {
    async fetchConstants() {
        fetch('http://localhost:8000/personas/constants/')
          .then(response => response.json())
          .then(data => {
            this.predefined_decision_making_factors = data.predefined_decision_making_factors
            this.predefined_communication_style = data.predefined_communication_style
            this.predefined_user_experience_expectations = data.predefined_user_experience_expectations
            this.predefined_personas = data.predefined_personas
            this.predefined_questions = data.predefined_questions

            this.selectedPersona = this.predefined_personas[0]
          })
    },
    selectPredefinedPersona(persona) {
      this.selectedPersona = persona
    }
  }
})
