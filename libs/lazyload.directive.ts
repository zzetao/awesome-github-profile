import { App } from 'vue'

export default function install(app: App) {
    app.directive('lazyload', {
        beforeMount(el) {
            // if (el.src && el.src.indexOf('placeholder') !== -1) {
            //     // placeholder
            //     el.setAttribute('src', 'assets/card-placeholder.png')
            // }
        },
        mounted (el, binding) {
            const intersectionObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting && entry.target === el) {
                        el.src = binding.value
                        intersectionObserver.unobserve(el)
                    }
                })
            });
            // start observing
            intersectionObserver.observe(el);
        }
    })    
}