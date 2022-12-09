import Cursor from 'custom-cursor'

export default function (Alpine) {
  Alpine.directive('cursor', (el, { modifiers }) => {
    const cursorCount = Number(modifiers[0]) ?? 0
    const hoverTargets = JSON.parse(el.getAttribute('x-cursor-targets'))

    new Cursor({
      count: cursorCount,
      targets: hoverTargets,
    })
  })
}
