<template>
  <div class="tooltipholder" :style="tooltipStyle">
    <div class="hovertooltip">
      <div v-html="tooltip" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import * as c from '~/assets/common'

export default Vue.extend({
  name: 'infoTooltip',
  props: {},
  data() {
    return {
      tooltipStyle: { opacity: 0 },
      x: 0,
      y: 0,
    }
  },
  computed: {
    ...mapState(['mobile', 'tooltip']),
    winWidth() {
      return this.$store.state.winSize[0]
    },
    winHeight() {
      return this.$store.state.winSize[1]
    },
  },
  watch: {
    tooltip() {
      this.recalcTooltipStyle()
    },
    winWidth() {
      this.recalcTooltipStyle()
    },
  },
  mounted() {
    window.addEventListener('mousemove', this.mouseMove)
  },
  beforeDestroy() {
    window.removeEventListener('mousemove', this.mouseMove)
  },
  methods: {
    mouseMove(e) {
      if (!this.tooltip) return
      this.x = e.pageX
      this.y = e.pageY
      this.recalcTooltipStyle()
    },
    async recalcTooltipStyle() {
      if (!this.tooltip || !this.$el)
        return (this.tooltipStyle = { opacity: 0 })

      await this.$nextTick()

      try {
        const { width, height } = this.$el.getBoundingClientRect()

        const sidePad = 25
        let left = this.x + sidePad,
          top = this.y - 5,
          transform = ''

        if (left + width >= this.winWidth - sidePad) {
          left = this.winWidth - width - sidePad
          transform = 'translateY(30px)'
        }

        if (top + height >= this.winHeight - sidePad) {
          top = this.winHeight - height - sidePad
          transform = ''
        }

        this.tooltipStyle = {
          left: left + 'px',
          top: top + 'px',
          transform,
          opacity: 1,
        }
      } catch (e) {
        this.tooltipStyle = {
          opacity: 0,
        }
      }
    },
  },
})
</script>

<style lang="scss">
.tooltipholder {
  pointer-events: none;
  position: absolute;
  --tooltip-pad-lr: 0.75em;
  --tooltip-pad-tb: 0.5em;
  z-index: 1003;
  font-size: 0.9rem;
}
.hovertooltip {
  max-width: 250px;
  font-weight: 400;
  background: var(--text);
  color: var(--bg);
  line-height: 1.4;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 0.4em 1em 0 var(--text);

  hr {
    border: none;
    border-top: 1px solid var(--text);
    opacity: 0.2;
    margin: 0.5em -2em;
    width: 200%;
  }

  & > * {
    padding: var(--tooltip-pad-tb) var(--tooltip-pad-lr);
  }
}
</style>
