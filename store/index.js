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

export const actions = {
  async nuxtServerInit({ commit, state }, { req }) {
    const contentDoc = '1rFcSntbispfYHagAX129_qcoHpbqfmsNn1P67Ncjg4I'
    let data = await axios
      .get(
        `https://us-central1-lix-338122.cloudfunctions.net/${
          state.dev ? 'refresh' : 'doc'
        }/${contentDoc}`,
      )
      .then((res) => {
        if (res.status === 500) return
        return res.data
      })
    if (!data) return

    let { content } = c.extractDataFrom3Lix(data)

    const contentWithElementsBrokenOut =
      content
        .map((co, index) => {
          if (!co.color) return
          return {
            slug:
              index === 0
                ? undefined
                : encodeURIComponent(
                    c.slugify(
                      (/<h1[^>]*?>([^<]*)/.exec(co.content || '')?.[1] || '')
                        .replace(/<[^>]*?>/g, '')
                        .trim(),
                    ),
                  ),
            color: co.color,
            thumbnail:
              co.thumbnail || /<picture.*?<\/picture>/g.exec(co.content)?.[0],
            tags: co.tags
              .split(',')
              .map((t) => t.trim().toLowerCase())
              .filter((t) => t),
            elements: co.content
              .replace(/<div class='table ?'>/gi, '')
              .split(`<div class='row'>`)
              .filter((s) => s)
              .map((content) => {
                const image = content
                  .split(/<\/div><div class='cell'>/g)?.[0]
                  ?.replace(/^<div[^>]*?>/, '')
                const text = content
                  .split(/<\/div><div class='cell'>/g)?.[1]
                  ?.replace(/(<\/div>)+$/g, '')
                return {
                  image,
                  text,
                }
              })
              .filter((co) => co.image || co.text),
          }
        })
        .filter((co) => co) || []

    commit('set', { elements: contentWithElementsBrokenOut })
  },
}
