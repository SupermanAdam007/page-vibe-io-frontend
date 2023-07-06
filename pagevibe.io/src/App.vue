<template>
  <v-container>
    <router-view />

    <!-- <div v-if="!showBanner" class="text-center">
      <div class="d-flex" style="max-width: 500px">
        <p class="mx-auto"> We use 🍪 for more details check our policy
          <a href="/cookiepolicy" target="_blank">here</a>
        </p>
        <v-btn class="ml-5 mt-n1 mr-auto" color="primary" @click="okBannerClicked">OK</v-btn>
      </div>
    </div> -->
  </v-container>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import useCookies from './composable/useCookies';

export default defineComponent({
  name: 'App',
  setup() {
    const gtag = inject<any>('gtag');
    const { showBanner, okClicked } = useCookies(gtag);
    const okBannerClicked = () => okClicked();
    
    return {
      showBanner,
      okBannerClicked,
    };
  },
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>