<template>
<v-container>
  <VirtualPersonaCard class="mb-8" :avatar="personas[0].avatar" :name="personas[0].name" :description="personas[0].description" />

  <h1>Feedback</h1>
  <div>
    <TextFeedback v-for="qa in qas" :key="qa.question" :question="qa.question" :answer="qa.answer" class="mb-2" />
  </div>
</v-container>
</template>

<script>
import VirtualPersonaCard from '@/components/VirtualPersonaCard.vue';
import TextFeedback from '@/components/TextFeedback.vue'


export default {
  components: { VirtualPersonaCard, TextFeedback },
  data: () => ({
    personas: [
      {
        avatar: '/Thinking face-rafiki.png',
        name: 'John Doe',
        description: 'John is a single 31-year-old content manager. His main goals are to enjoy a healthy diet and lifestyle while working from home, and to have all the information he needs to be able to find and order healthy takeaway meals.',
      },
    ],
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
    ]
  }),

  methods: {
    onClick() {
      this.loading = true

      console.log(this.url);

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },
}
</script>
