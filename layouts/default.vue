<template>
  <client-only>
    <div
      class="layout"
      :style="{ '--h1Font': c.config.h1Font, '--bodyFont': c.config.bodyFont }"
    >
      <InfoTooltip />
      <Lightbox />
      <div>
        <nuxt />
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import * as c from '~/assets/common'

const detectMobile = () => {
  const a = navigator.userAgent || navigator.vendor || (window as any).opera
  if (
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
      a,
    ) ||
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
      a.substr(0, 4),
    )
  )
    return true
}

import Vue from 'vue'
import axios from 'axios'

export default Vue.extend({
  data() {
    return {
      c,
    }
  },
  head() {
    return {
      script: [
        {
          defer: true,
          src: 'https://umm.jasperstephenson.com/script.js',
          'data-website-id': 'c11cd71c-8e14-4a11-bc24-1ad4c6d53507',
        },
      ],
    }
  },
  created() {
    this.loadElements()
  },
  mounted() {
    window.addEventListener('resize', c.debounce(this.resetWindowSize, 100), {
      passive: true,
    })
    this.resetWindowSize()
  },
  methods: {
    async loadElements() {
      const contentDoc = c.config.contentDoc
      let data = await axios
        .get(`https://p.jasperstephenson.com/3lix/doc/${contentDoc}`)
        .then((res) => {
          if (res.status === 500) return c.log('Error loading content doc')
          return res.data
        })
      if (!data) return c.log('Error loading content doc')

      let { content } = c.extractDataFrom3Lix(data)

      const contentWithElementsBrokenOut =
        content
          .map((co, index) => {
            // if (!co.color) return
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
              color: co.color || '#444',
              thumbnail:
                co.thumbnail ||
                /<picture.*?<\/picture>/g.exec(co.content)?.[0] ||
                null,
              tags: co.tags
                ?.split(',')
                .map((t) => t.trim().toLowerCase())
                .filter((t) => t),
              elements: co.content
                ?.replace(/<div class='table ?'>/gi, '')
                .split(`<div class='row'>`)
                .filter((s) => s)
                .map((content) => {
                  const image = content
                    .split(/<\/div><div class='cell[^>]*?>/g)?.[0]
                    ?.replace(/^<div[^>]*?>/, '')
                  const text = content
                    .split(/<\/div><div class='cell[^>]*?>/g)?.[1]
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

      this.$store.commit('set', { elements: contentWithElementsBrokenOut })
    },

    resetWindowSize() {
      const mobile = !!detectMobile() || window.innerWidth < 768
      this.$store.commit('set', {
        winSize: [window.innerWidth, window.innerHeight],
        mobile,
      })

      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      let vw = window.innerWidth * 0.01
      document.documentElement.style.setProperty('--vw', `${vw}px`)
    },
  },
})
</script>
<style lang="scss">
h1 {
  font-family: var(--h1Font, 'Bungee Outline'), Helvetica, sans-serif !important;
}
.layout {
  --font-stack: var(--bodyFont, 'Asap'), 'Helvetica', sans-serif !important;
  font-family: var(--font-stack) !important;
}
</style>
