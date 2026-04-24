import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './directives/reveal.js'

import '../styles/tokens.css'
import 'lenis/dist/lenis.css'
import './styles/site.css'
import './styles/components/primitives.css'
import './styles/motion.css'

const app = createApp(App)
app.directive('reveal', vReveal)
app.mount('#app')
