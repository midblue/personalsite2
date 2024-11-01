<template></template>

<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  async mounted() {
    this.$store.commit('set', {
      preselectedSlug: this.$route.path.replace('/p/', '').replace(/\/$/, ''),
    })
    this.$router.replace(`/`)
  },
  methods: {},
})
</script>
