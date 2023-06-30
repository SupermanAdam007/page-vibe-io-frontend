<template>
  <v-card :elevation="6">
    <v-row no-gutters class="align-center justify-center">
      <v-col cols="auto">
          <v-img :src="avatar" width="300px" alt="Avatar" cover />
      </v-col>
    </v-row>

    <v-card-title class="text-h3 text-sm-h2 mb-3 text-center">{{ name }}</v-card-title>
    <v-card-text class="description">{{ description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    avatar: String,
    name: String,
    description: String,
  },
};
</script>

<style>
.description {
  color: #666;
  word-break: break-word;
}
</style>
