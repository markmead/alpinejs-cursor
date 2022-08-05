import Cursor from 'custom-cursor'

export default function (Alpine) {
  Alpine.directive('cursor', (el, { modifiers }) => {
    let cursorCount = Number(modifiers[0]) ?? 0
    let hoverTargets = JSON.parse(el.getAttribute('x-cursor-targets'))

    new Cursor({
      count: cursorCount,
      targets: hoverTargets,
    })
  })
}
