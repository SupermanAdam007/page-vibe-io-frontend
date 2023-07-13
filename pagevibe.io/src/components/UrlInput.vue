<template>
  <div>
    <v-text-field v-model="url" :loading="loading" :rules="urlRules" elevation="6" density="compact" variant="solo" label="Enter URL" append-inner-icon="mdi-magnify" single-line hide-details
      @click:append-inner="onClick" v-on:keyup.enter="onClick" type="url">
      <template v-slot:prepend-inner>
        <span style="color:rgb(129, 129, 129)">https://</span>
      </template>
    </v-text-field>

    <v-alert v-if="errorMessage" type="error" title="Unable to process" :text="errorMessage" variant="tonal"></v-alert>
  </div>
</template>

<script>
import { mapWritableState } from 'pinia'
import { useAppStore } from '@/store/app'

export default {
  data() {
    return {
      loading: false,
      urlRules: [
        (value) => !!value || "Required.",
        (value) => this.isURL(`https://${value}`) || "URL is not valid",
      ],
    }
  },
  computed: {
    ...mapWritableState(useAppStore, ['url', 'errorMessage']),
  },
  mounted() {
    if (this.$route.query.url !== undefined) {
      this.url = this.$route.query.url
    }
  },
  methods: {
    isURL(str) {
      var res = str.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      return (res !== null)
    },
    onClick() {
      this.url = this.url.replaceAll('http://', '')
      this.url = this.url.replaceAll('https://', '')
      // this.url = this.url.replace('www.', '')

      if (!this.isURL(`https://${this.url}`)) return

      this.$router.push('/personas')

      // this.loading = true

      // setTimeout(() => {
      //   this.loading = false
      //   this.$router.push('/personas')

      //   // this.$router.push(`/feedback?url=https://${this.url}`)
      // }, 2000)
    },
  },
}
</script>

<style></style>