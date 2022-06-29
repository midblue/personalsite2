<template></template>

<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  async asyncData({ $axios, store, redirect, route, params }) {
    const slug = params.slug || ''
    const found = store.state.elements.find((el: any) => el.slug === slug)

    return {
      slug,
      preselectedSlug: found?.slug,
    }
  },
  head() {
    const element = (this as any).$store.state.elements.find(
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
  async mounted() {
    // this.$router.replace(`/#${(this as any).slug || ''}`)
  },
  methods: {},
})
</script>
