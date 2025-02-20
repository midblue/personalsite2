import * as c from '~/assets/common'
import Vue from 'vue'
import axios from 'axios'

export const state = () => ({
  elements: [],
  dev: process.env.NODE_ENV === `development`,
  mobile: true,
  winSize: [1200, 1000],
  lightboxSrc: null,
  tooltip: null,
})

export const mutations = {
  set(state, updates) {
    for (let prop in updates) Vue.set(state, prop, updates[prop])
  },

  tooltip(state, newTooltip) {
    state.tooltip = newTooltip
  },
}
