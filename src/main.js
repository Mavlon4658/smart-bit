import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import components from './components/UI'
import Particles from "vue3-particles";

const app = createApp(App)

for (const [key, value] of Object.entries(components)) {
    app.component(key, value);
}

app
    .use(router)
    .use(Particles)
    .mount('#app')
