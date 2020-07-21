import { createApp } from 'vue'
import App from './App.vue'
import installLazyLoadDirective from './libs/lazyload.directive.ts'
import './components/normalize.css'

const app = createApp(App)

installLazyLoadDirective(app)

app.mount('#app')
