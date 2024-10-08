<template>
  <div
    class="rowholder"
    :class="{ focused: isFocused }"
    :style="{
      '--highlight-color': color,
      '--element-count': elements.length,
    }"
  >
    <section class="pane hidescrollbar" ref="pane">
      <!-- <IntroEl v-if="index === 0" /> -->
      <PaneElement
        class="paneElement"
        v-for="(p, elIndex) in elements"
        :ref="'element' + elIndex"
        :key="index + ' ' + elIndex"
        :index="elIndex"
        @focused="focused(elIndex)"
        v-bind="{ ...p, color }"
        :tags="tags"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  props: {
    elements: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    slug: {
      type: String as PropType<string>,
      default: '',
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    color: {
      type: String,
    },
    hasDown: {
      type: Boolean,
      default: false,
    },
    hasUp: {
      type: Boolean,
      default: false,
    },
    forceFocusX: {
      type: Number,
      default: 0,
    },
    index: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      current: 0,
      isFocused: false,
    }
  },

  computed: {},

  watch: {
    forceFocusX: {
      handler(value) {
        if (!this.$refs.pane || !this.isFocused || value === -1) return
        // c.log('force focus', value, this.index, this.$refs.pane)
        this.current = value
        ;(this.$refs.pane as HTMLElement).scrollTo(
          ((this.$refs.pane as HTMLElement).scrollWidth /
            this.elements.length) *
            value,
          0,
        )

        // const hasNext = value !== this.elements.length - 1,
        //   hasPrevious = value !== 0

        // if (hasNext) this.preload(value + 1)
        // if (hasPrevious) this.preload(value - 1)
      },
    },
  },

  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        this.isFocused = entries[0].isIntersecting
        if (this.isFocused) {
          // ;(this.$el as HTMLElement).focus?.()
          this.$emit('focusY')

          setTimeout(() => {
            if (!this.isFocused) return
            // c.log(
            //   'force focus',
            //   this.index,
            //   this.$route.path.split('/')[0] +
            //     (this.slug ? '/p/' + this.slug : '/'),
            // )
            history.replaceState(
              {},
              '',
              this.$route.path.split('/')[0] +
                (this.slug ? '/p/' + this.slug : '/'),
            )
            ;(this as any).$ga?.page(this.slug ? '/p/' + this.slug : '/')
          }, 1000)
        } else {
          this.reset()
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      },
    )
    observer.observe(this.$el)
  },
  methods: {
    async focused(index: number) {
      if (!this.isFocused) return
      this.current = index
      this.$emit('focusX', index)

      setTimeout(() => {
        if (!this.isFocused) return
        const hasNext = index !== this.elements.length - 1,
          hasPrevious = index !== 0

        if (hasNext) this.preload(index + 1)
        if (hasPrevious) this.preload(index - 1)
      }, 200)
    },
    reset() {
      // c.log('reset', this.index, this.isFocused)
      if (!this.$refs.pane || this.isFocused) return
      this.current = 0
      ;(this.$refs.pane as HTMLElement).scrollTo(0, 0)
    },
    preload(index: number) {
      if (!this.$refs.pane || !this.isFocused) return
      // c.log('preload', this.index, index, this.isFocused)

      const images = [
        ...(this.elements[index]?.image || '').matchAll(
          /src=(?:'|")(.*?)(?:'|")/g,
        ),
      ].map((m) => m[1])
      images.forEach((i) => {
        const img = new Image()
        img.src = i
      })
      if (this.elements[index]?.image) {
        ;((this.$refs[`element${index}`] as any)?.[0]?.$el as HTMLElement)
          ?.querySelectorAll('img')
          .forEach((img) => {
            img.removeAttribute('loading')
          })
        // this.elements[index].image = this.elements[index].image.replace(
        //   /loading='lazy'/g,
        //   '',
        // )
      }
      // c.log('preloaded', images)
    },
  },
})
</script>

<style lang="scss" scoped>
.rowholder {
  width: var(--pane-width);
  height: var(--pane-height);
}
.pane {
  z-index: 1;
  // background: white; //var(--highlight-color);
  width: 100%;
  height: 100%;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-x: none; // disables swipe navigation

  // for vertical scroll
  scroll-snap-align: center;
}
</style>
