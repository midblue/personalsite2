<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  asyncData({ redirect, params }) {
    redirect(`/#${params.slug || ''}`)
  },
  mounted() {},
  methods: {},
})
</script>
