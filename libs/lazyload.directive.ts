import { App } from 'vue'

const onePxPng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='

export default function install(app: App) {
    app.directive('lazyload', {
        beforeMount(el) {
            if (!el.src) {
                // placeholder
                el.setAttribute('src', onePxPng)
            }
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