// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    url: "",
    persona: {
      avatar: '/Thinking face-rafiki.png',
      name: 'John Doe',
      description: 'John is a single 31-year-old content manager. His main goals are to enjoy a healthy diet and lifestyle while working from home, and to have all the information he needs to be able to find and order healthy takeaway meals.',
    },
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
})
