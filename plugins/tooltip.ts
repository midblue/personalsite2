import Vue from 'vue'

Vue.directive(`tooltip`, {
  bind: (el: any, binding, vnode) => {
    let tooltipData = binding.value
    const $store = vnode.context?.$store
    if (!$store) return

    el.tooltipData = tooltipData

    el.addEventListener(`mouseenter`, () => {
      window.addEventListener(`click`, clearTooltip)
      $store.commit(`tooltip`, el.tooltipData)
    })

    const clearTooltip = () => {
      $store.commit(`tooltip`)
      window.removeEventListener(`click`, clearTooltip)
    }
    el.addEventListener(`mouseleave`, clearTooltip)
  },
  componentUpdated: (el, binding, vnode) => {
    let tooltipData = binding.value
    ;(el as any).tooltipData = tooltipData
  },
  unbind: (el, binding, vnode) => {},
})
