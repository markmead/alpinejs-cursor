import PLUGIN from '../src/index.js'

document.addEventListener('alpine:init', () => {
  window.Alpine.plugin(PLUGIN)
})
