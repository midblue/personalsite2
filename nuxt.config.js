import * as c from './assets/common'
import axios from 'axios'

export default {
  // no ssr at all
  ssr: false,
  target: 'static',
  ignore: ['/static'],

  env: {
    CONFIG: process.env.CONFIG,
  },

  head: {
    title: 'Jasper Stephenson',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: false,

  css: ['~/assets/css/main.scss'],

  plugins: [{ src: `~/plugins/tooltip.ts` }],

  components: true,

  buildModules: ['@nuxt/typescript-build'],

  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-112989318-1',
        // debug: {
        //   enabled: true,
        //   sendHitTask: true,
        // },
      },
    ],
  ],

  build: {},

  generate: {
    routes: getRoutesToGenerate,
  },
}

async function getRoutesToGenerate() {
  const paths = ['/']
  const contentDoc = c.config.contentDoc
  let data = await axios
    .get(`https://p.jasperstephenson.com/3lix/doc/${contentDoc}`)
    .then((res) => {
      if (res.status === 500) return
      return res.data
    })
  if (!data) return paths

  let { content } = c.extractDataFrom3Lix(data)

  const contentWithElementsBrokenOut =
    content
      .map((co) => {
        if (!co.color) return
        return {
          elements: co.content
            .replace(/<div class='table ?'>/gi, '')
            .split(`<div class='row'>`)
            .filter((s) => s)
            .map((content) => {
              const text = content
                .split(/<\/div><div class='cell[^>]*?>/g)?.[1]
                ?.replace(/(<\/div>)+$/g, '')
              return {
                text,
              }
            })
            .filter((co) => co.image || co.text),
        }
      })
      .filter((co) => co) || []
  contentWithElementsBrokenOut.forEach((co, index) => {
    if (index === 0) return
    co.slug = encodeURIComponent(
      c.slugify(
        (/<h1[^>]*?>([^<]*)/.exec(co.elements[0].text || '')?.[1] || '')
          .replace(/<[^>]*?>/g, '')
          .trim(),
      ),
    )
  })

  return [
    ...paths,
    ...contentWithElementsBrokenOut
      .map((co) => co.slug)
      .filter((co) => co)
      .map((co) => `/p/${co}`),
  ]
}
