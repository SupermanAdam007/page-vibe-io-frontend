<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <div>
        <h1 class="text-h2 text-sm-h1" color="primary">
          PageVibe.io
        </h1>
        <h2 class="text-subtitle-1 text-sm-h5 mt-4 mb-12">
          Boost your web with virtual customer insights
        </h2>
      </div>

      <v-row no-gutters class="align-center justify-center mt-4">
        <v-col cols="12">
          <UrlInput style="max-width: 650px;" class="mx-auto" />
        </v-col>
      </v-row>

      <v-img height="500" src="@/assets/Mobiletesting-amico.svg">
      </v-img>
    </v-responsive>
  </v-container>
</template>

<script>
import UrlInput from './UrlInput.vue'

export default {
  components: { UrlInput }
}
</script>
