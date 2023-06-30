<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <div>
        <h1 class="text-h2 text-sm-h1" color="primary">
          PageVibe.io
        </h1>
        <h2 class="text-subtitle-1 text-sm-h5 mt-4 mb-12">
          Elevate Your Web Pages with Virtual Customer Insights
        </h2>
      </div>

      <v-row no-gutters class="align-center justify-center mt-4">
        <v-col cols="11">
          <v-text-field v-model="url" :loading="loading" elevation="6" density="compact" variant="solo" label="Enter URL" append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="onClick"
            v-on:keyup.enter="onClick" style="max-width: 650px;" class="mx-auto"></v-text-field>
        </v-col>
      </v-row>


      <v-img height="500" src="@/assets/Mobiletesting-amico.svg" />
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    loading: false,
    url: "",
  }),

  methods: {
    onClick() {
      this.loading = true

      console.log(this.url);

      setTimeout(() => {
        this.loading = false
        this.loaded = true

        this.$router.push('/feedback')
      }, 2000)
    },
  },
}
</script>
