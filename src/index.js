import Cursor from 'custom-cursor'

export default function (Alpine) {
  Alpine.directive('cursor', (el, { modifiers }) => {
    const [cursorCount] = modifiers

    const hoverTargets = JSON.parse(el.getAttribute('x-cursor-targets'))

    new Cursor({
      count: Number(cursorCount) || 1,
      targets: hoverTargets,
    })
  })
}
