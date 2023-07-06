/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import router from './router';

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import VueGtag from 'vue-gtag';
import { VueCookieNext } from 'vue-cookie-next';


const app = createApp(App)

registerPlugins(app)

app.use(VueCookieNext);
app.use(VueGtag, {
  config: { id: 'G-1W1J66X3VS' },
  router,
  enabled: true,
});

// Will be used later
app.provide('gtag', app.config.globalProperties.$gtag);

app.mount('#app')
