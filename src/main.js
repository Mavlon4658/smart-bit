import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import components from './components/UI';
import Particles from "vue3-particles";
// import { VueI18n } from 'vue-i18n';
// import message from './lang/index.js';
import i18n from './lang/index.js'
import './style.css';

const app = createApp(App)

for (const [key, value] of Object.entries(components)) {
    app.component(key, value);
}

app
    .use(i18n)
    .use(router)
    .use(Particles)
    .mount('#app')