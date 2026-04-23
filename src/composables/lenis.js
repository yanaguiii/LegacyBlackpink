import Lenis from 'lenis'

let instance = null

export function initLenis() {
  if (instance) return instance
  instance = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.4
  })
  const raf = (time) => {
    instance.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  return instance
}

export function getLenis() {
  return instance
}

export function scrollToAnchor(target) {
  if (!instance) return
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el) return
  instance.scrollTo(el, { offset: -72, duration: 1.25 })
}
