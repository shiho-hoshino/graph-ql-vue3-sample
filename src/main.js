import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { apolloProvider } from './vue-apollo.ts';

loadFonts();

createApp(App).use(apolloProvider).use(vuetify).mount('#app');
