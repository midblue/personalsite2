<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  asyncData({ redirect, params }) {
    c.log('s', params.slug)
    redirect(`/#${params.slug || ''}`)
  },
  mounted() {},
  methods: {},
})
</script>
