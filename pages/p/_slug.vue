<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  async asyncData({ $axios, store, redirect, route, params }) {
    const contentDoc = '1rFcSntbispfYHagAX129_qcoHpbqfmsNn1P67Ncjg4I'
    let data = await $axios
      .get(
        `https://us-central1-lix-338122.cloudfunctions.net/${
          store.state.dev ? 'refresh' : 'doc'
        }/${contentDoc}`,
      )
      .then((res) => {
        if (res.status === 500) return
        return res.data
      })
    if (!data) return

    let { content } = c.extractDataFrom3Lix(data) as any

    const contentWithElementsBrokenOut =
      content
        .map((co: any, index: number) => {
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
              .map((t: string) => t.trim().toLowerCase())
              .filter((t: string) => t),
            elements: co.content
              .replace(/<div class='table ?'>/gi, '')
              .split(`<div class='row'>`)
              .filter((s: any) => s)
              .map((content: string) => {
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
              .filter((co: any) => co.image || co.text),
          }
        })
        .filter((co: any) => co) || []

    const slug = params.slug || ''
    const found = contentWithElementsBrokenOut.find(
      (el: any) => el.slug === slug,
    )

    return {
      slug,
      elements: contentWithElementsBrokenOut,
      preselectedSlug: found?.slug,
    }
  },
  head() {
    const element = (this as any).elements.find(
      (el: any) => el.slug && el.slug === (this as any).preselectedSlug,
    )
    const title =
      /<h1[^>]*?>([^<]*)/g.exec(element?.elements[0]?.text || '')?.[1] || 'Home'
    const image =
      /src=(?:'|")([^"']*)/g.exec(element?.elements[0]?.image || '')?.[1] ||
      /src=(?:'|")([^'"]*)/g.exec(
        (this as any).elements[0].elements[1]?.image || '',
      )?.[1] ||
      ''
    const url = element
      ? `https://jasperstephenson.com/p/${element.slug}`
      : `https://jasperstephenson.com/`
    const description = element
      ? element.elements[0].text
          .replace(/<h1.*<\/h1>/g, '')
          .replace(/<[^>]*>/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
      : 'Digital Tinkerer, Friendly Ghost.'
    return {
      title: title + ' | ' + 'Jasper Stephenson',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Jasper Stephenson',
        },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: description },
        { hid: 'og:image', name: 'og:image', content: image },
        { hid: 'og:url', name: 'og:url', content: url },
      ],
    }
  },
  mounted() {
    this.$router.replace(`/#${(this as any).slug || ''}`)
  },
  methods: {},
})
</script>
