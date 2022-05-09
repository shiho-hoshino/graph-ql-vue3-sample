import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { apolloProvider } from './vue-apollo.ts';

loadFonts();

createApp(App).use(router).use(apolloProvider).use(vuetify).mount('#app');
