<template></template>

<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  // head() {
  //   const slug = this.$route.params.slug || ''
  //   const found = this.$store.state.elements.find((el: any) => el.slug === slug)
  //   const preselectedSlug = found?.slug

  //   const element = (this as any).$store.state.elements.find(
  //     (el: any) => el.slug && el.slug === preselectedSlug,
  //   )
  //   if (!element) return {}
  //   const title =
  //     /<h1[^>]*?>([^<]*)/g.exec(element?.elements[0]?.text || '')?.[1] || 'Home'
  //   const image =
  //     /src=(?:'|")([^"']*)/g.exec(element?.elements[0]?.image || '')?.[1] ||
  //     /src=(?:'|")([^'"]*)/g.exec(
  //       (this as any).elements[0].elements[1]?.image || '',
  //     )?.[1] ||
  //     ''
  //   const url = element
  //     ? `https://jasperstephenson.com/p/${element.slug}`
  //     : `https://jasperstephenson.com/`
  //   const description = element
  //     ? element.elements[0].text
  //         .replace(/<h1.*<\/h1>/g, '')
  //         .replace(/<[^>]*>/g, ' ')
  //         .replace(/\s+/g, ' ')
  //         .trim()
  //     : 'Digital Tinkerer, Friendly Ghost.'
  //   return {
  //     title: title + ' | ' + 'Jasper Stephenson',
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'Jasper Stephenson',
  //       },
  //       { hid: 'og:title', name: 'og:title', content: title },
  //       { hid: 'og:description', name: 'og:description', content: description },
  //       { hid: 'og:image', name: 'og:image', content: image },
  //       { hid: 'og:url', name: 'og:url', content: url },
  //     ],
  //   }
  // },
  async mounted() {
    this.$store.commit('set', {
      preselectedSlug: this.$route.path.replace('/p/', '').replace(/\/$/, ''),
    })
    this.$router.replace(`/`)
  },
  methods: {},
})
</script>
