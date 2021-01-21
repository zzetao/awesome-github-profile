const fs = require('fs')
const path = require('path')
const vue = require('@vitejs/plugin-vue')

// https://github.com/vitejs/vite/pull/1218
function fixFaviconBugPlugin() {
    return {
        rollupInputOptions: {
            pluginsPostBuild: [
                {
                    name: 'fix-favicon-bug-plugin',
                    async writeBundle() {
                        const htmlPath = path.resolve('./dist/index.html')
                        let html = fs.readFileSync(htmlPath).toString()
                        html = html.replace('href="undefined"', 'href=/assets/awesome.ico')

                        fs.writeFileSync(htmlPath, html)
                    }
                }
            ]
        }
    }
}

module.exports = {
    assetsDir: 'assets',
    plugins: [
        vue(),
        // fixFaviconBugPlugin()
    ]
}
