import { createApp } from 'vue'
import App from './App.vue'
import installLazyLoadDirective from './libs/lazyload.directive.ts'
import './components/normalize.css'

const app = createApp(App)

installLazyLoadDirective(app)

app.mount('#app')

;(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-173129275-1');
})()
