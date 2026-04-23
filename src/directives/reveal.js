const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const io =
  typeof window !== 'undefined'
    ? new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add('is-revealed')
              io.unobserve(e.target)
            }
          }
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      )
    : null

export const vReveal = {
  mounted(el, binding) {
    if (prefersReduced) {
      el.classList.add('is-revealed')
      return
    }
    el.classList.add('reveal')
    const delay = Number(binding.value) || 0
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
    if (binding.modifiers.now) {
      requestAnimationFrame(() => el.classList.add('is-revealed'))
    } else {
      io.observe(el)
    }
  },
  unmounted(el) {
    io?.unobserve(el)
  }
}
