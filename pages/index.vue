<template>
  <div
    class="contents"
    :class="{ mobile }"
    :style="{ '--highlight-color': elements[focusY] && elements[focusY].color }"
  >
    <LeftNav
      :elements="elements"
      :focusY="focusY"
      :focusX="focusX"
      @focusY="forceFocusY"
    />

    <main ref="main">
      <PaneRow
        v-for="(row, index) in elements"
        :key="'row' + index"
        v-bind="row"
        :hasDown="index !== elements.length - 1"
        :hasUp="index !== 0"
        :ref="`row${index}`"
        @down="down"
        @up="up"
        @focusY="setFocusY(index)"
        @focusX="setFocusX"
        :forceFocusX="forceFocusX"
        :index="index"
        :class="{ first: index === 0 }"
      />
      <Loading v-if="!elements.length" />
    </main>

    <div class="navigators">
      <transition name="fade">
        <div v-if="hasUp" class="arrow up" @click="up">↑</div>
      </transition>
      <transition name="fade">
        <div v-if="hasDown" class="arrow down" @click="down">↓</div>
      </transition>
      <transition name="fade">
        <div v-if="hasNext" class="arrow next" @click="next">→</div>
      </transition>
      <transition name="fade">
        <div v-if="hasPrevious" class="arrow previous" @click="previous">←</div>
      </transition>

      <transition name="fade">
        <div class="guide sub textcenter" v-if="focusY === 0 && focusX === 0">
          Scroll, click, or use the <br />arrow keys to navigate.
        </div>
      </transition>

      <transition name="fade">
        <div
          class="dots"
          :class="{ bottom: !hasDown }"
          v-if="elements[focusY] && elements[focusY].elements.length > 1"
        >
          <div
            class="dot"
            v-for="(p, index) in elements[focusY].elements"
            :key="focusY + ' ' + index"
            :class="{ active: index === focusX }"
            @click="!mobile && (forceFocusX = index)"
          ></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import * as c from '~/assets/common'
import { mapState } from 'vuex'

export default Vue.extend({
  head() {
    const element = (this as any).elements.find(
      (el: any) => el.slug && el.slug === this.preselectedSlug,
    )
    const title =
      document?.title ||
      (
        /<h1[^>]*?>([^<]*)/g.exec(element?.elements?.[0]?.text || '')?.[1] ||
        'Home'
      ).trim() +
        ' | ' +
        'Jasper Stephenson'
    const image =
      /src=(?:'|")([^"']*)/g.exec(element?.elements?.[0]?.image || '')?.[1] ||
      /src=(?:'|")([^'"]*)/g.exec(
        (this as any).elements?.[0]?.elements[1]?.image || '',
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
      title: title,
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
  data() {
    return {
      hash: this.$route.hash.replace(/^#/, '').replace(/\/$/, ''),
      focusX: 0,
      focusY: 0,
      forceFocusX: 0,
    }
  },

  computed: {
    ...mapState(['dev']),

    elements(): any {
      return this.$store.state.elements
    },
    preselectedSlug(): string {
      return this.$store.state.preselectedSlug
    },
    mobile(): boolean {
      return this.$store.state.mobile
    },
    hasNext(): boolean {
      return this.focusX !== this.elements[this.focusY]?.elements.length - 1
    },
    hasPrevious(): boolean {
      return this.focusX !== 0
    },
    hasUp(): boolean {
      return this.focusY !== 0
    },
    hasDown(): boolean {
      return this.focusY !== this.elements.length - 1
    },
  },

  watch: {
    async elements(newEls) {
      this.scrollToPreselected()
    },
  },

  async mounted() {
    // add up/down keyboard listeners
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        e.stopPropagation()
        this.down()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        e.stopPropagation()
        this.up()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        e.stopPropagation()
        this.previous()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        e.stopPropagation()
        this.next()
      }

      this.scrollToPreselected()
    })
  },
  methods: {
    async scrollToPreselected() {
      if (!this.elements.length) return
      if (!this.preselectedSlug) return
      c.log('preselected', this.preselectedSlug)

      await this.$nextTick()
      await c.sleep(100)

      const found = this.elements.find(
        (el: any) => el.slug === this.preselectedSlug,
      )
      if (found) {
        c.log('found entry for', this.preselectedSlug)
        this.forceFocusY(this.elements.indexOf(found), true)
      }
      history.replaceState(
        {},
        '',
        this.$route.path.split('/')[0] +
          (found && this.preselectedSlug ? '/p/' + this.preselectedSlug : '/'),
      )

      this.$store.commit('set', { preselectedSlug: null })
    },

    setFocusY(index: number) {
      this.focusY = index
      this.focusX = 0
      this.forceFocusX = -1

      // set page title to the first element's title | Jasper Stephenson
      const title =
        /<h1[^>]*?>([^<]*)/g.exec(
          this.elements[index]?.elements?.[0]?.text || '',
        )?.[1] || 'Home'
      document.title = title + ' | Jasper Stephenson'

      setTimeout(() => {
        if (this.focusY !== index) return
        // ;this.preselectedSlug = this.elements[index].slug
        const hasNext = index !== this.elements.length - 1,
          hasPrevious = index !== 0

        if (hasNext) this.preload(index + 1)
        if (hasPrevious) this.preload(index - 1)
      }, 200)
    },
    async forceFocusY(index: number, instant = false) {
      this.focusY = index
      this.focusX = 0
      this.forceFocusX = -1
      while (!(this.$refs.main as HTMLElement)) await c.sleep(100)
      while (!(this.$refs[`row${index}`] as any)?.[0]) {
        await c.sleep(100)
      }

      ;(this.$refs.main as HTMLElement).scrollTo({
        left: 0,
        top:
          ((this.$refs.main as HTMLElement).scrollHeight /
            this.elements.length) *
          index,
        // @ts-ignore
        behavior: instant ? 'instant' : 'smooth',
      })
      // ;this.preselectedSlug = this.elements[index].slug
    },
    setFocusX(index: number) {
      this.focusX = index
    },
    down() {
      const prev = this.focusY
      // scroll 100% down
      if (!this.$refs.main) return
      ;(this.$refs.main as HTMLElement).scrollTop +=
        (this.$refs.main as HTMLElement).scrollHeight / this.elements.length
      this.forceFocusX = -1
    },
    up() {
      const prev = this.focusY
      // scroll 100% up
      if (!this.$refs.main) return
      ;(this.$refs.main as HTMLElement).scrollTop -=
        (this.$refs.main as HTMLElement).scrollHeight / this.elements.length
      this.forceFocusX = -1
    },
    next() {
      const prev = this.focusX
      this.forceFocusX = Math.min(
        this.focusX + 1,
        this.elements[this.focusY]?.elements.length - 1,
      )
      if (
        this.$refs.main &&
        this.forceFocusX === prev &&
        this.elements[this.focusY]?.elements.length - 1 === prev
      ) {
        ;(this.$refs.main as HTMLElement).classList.add('bounceRight')
        setTimeout(() => {
          ;(this.$refs.main as HTMLElement).classList.remove('bounceRight')
        }, 300)
      }
    },
    previous() {
      const prev = this.focusX
      this.forceFocusX = Math.max(0, this.focusX - 1)
      if (this.$refs.main && this.forceFocusX === prev && 0 === prev) {
        ;(this.$refs.main as HTMLElement).classList.add('bounceLeft')
        setTimeout(() => {
          ;(this.$refs.main as HTMLElement).classList.remove('bounceLeft')
        }, 300)
      }
    },
    preload(index: number) {
      // c.log('preload', index)
      const images = [
        ...(this.elements[index].elements?.[0]?.image || '').matchAll(
          /src=(?:'|")(.*?)(?:'|")/g,
        ),
      ].map((m) => m[1])
      images.forEach((i) => {
        const img = new Image()
        img.src = i
      })
      if (this.elements[index].elements?.[0]?.image) {
        ;((this.$refs[`row${index}`] as any)?.[0]?.$el as HTMLElement)
          ?.querySelectorAll('img')
          .forEach((img) => {
            img.removeAttribute('loading')
          })
        // this.elements[index].elements[0].image = (
        //   this as any
        // ).elements[index].elements[0].image.replace(/loading='lazy'/g, '')
      }
      // c.log('preloaded', images)
    },
  },
})
</script>

<style lang="scss" scoped>
.contents {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  --pane-width: calc(min(100vw, 100 * var(--vw)) - var(--nav-width));
  --pane-height: calc(min(100vh, 100 * var(--vh)));

  &.mobile {
    --nav-width: 0px;
    --pane-width: calc(min(100vw, 100 * var(--vw)));
  }
}

main {
  flex: 1;
  height: var(--pane-height);
  width: var(--pane-width);
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overscroll-behavior-x: none; // disables swipe navigation

  // &:before {
  //   position: fixed;
  //   z-index: 0;
  //   content: '';
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: var(--highlight-color);
  //   opacity: 0.05;
  //   transition: background 1s;
  // }
}
.navigators {
  position: absolute;
  z-index: 6;
  pointer-events: none;
  right: 0;
  top: 0;
  height: var(--pane-height);
  width: var(--pane-width);

  & > * {
    pointer-events: auto;
  }
}

.guide {
  z-index: 2;
  position: absolute;
  left: 50%;
  bottom: 4rem;
  transform: translateX(-50%);
}
.contents.mobile .guide {
  display: none;
}

.dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  cursor: pointer;
  transition: bottom 0.2s ease-in-out;

  &.bottom {
    bottom: 0.5rem;
  }

  .dot {
    width: 1.5rem;
    height: 0.8rem;

    &:after {
      content: '';
      position: absolute;
      top: 0%;
      left: 1px;
      border-radius: 3px;
      // transform: translate(-50%, -50%);
      width: calc(100% - 2px);
      height: 100%;
      // border-radius: 50%;
      background-color: #333;
      opacity: 0.15;
      transition: opacity 0.2s ease-in-out;
      box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
    }

    &:hover {
      &:after {
        opacity: 0.3;
      }
    }
    &.active {
      &:after {
        opacity: 0.4;
      }
    }
  }
}
.contents.mobile .dots {
  bottom: 1.5rem;

  .dot {
    width: 1rem;
    height: 1rem;
  }
}

.arrow {
  font-weight: bold;
  position: absolute;
  z-index: 2;
  background: rgba(40, 40, 40, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.2s ease-in-out;

  --s1: 4.5rem;
  --s2: 1.7rem;
  --d: 0rem;

  &:hover {
    opacity: 1;
    background: rgba(40, 40, 40, 0.8);
    --s2: 2rem;
  }
}
.contents.mobile .arrow {
  --s1: 3rem;
  --s2: 1.4rem;
  background: transparent;
  color: var(--text);
  // pointer-events: none;
}
.up {
  left: 50%;
  transform: translateX(-50%);
  top: var(--d);
  width: var(--s1);
  height: var(--s2);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}
.down {
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--d);
  top: auto;
  width: var(--s1);
  height: var(--s2);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.next {
  top: 50%;
  transform: translateY(-50%);
  right: var(--d);
  height: var(--s1);
  width: var(--s2);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: var(--highlight-color) !important;
  opacity: 1;
}
.previous {
  top: 50%;
  transform: translateY(-50%);
  left: var(--d);
  right: auto;
  height: var(--s1);
  width: var(--s2);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

@keyframes bounceRight {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
}
.bounceRight {
  animation: 0.3s ease-in-out forwards bounceRight;
}

@keyframes bounceLeft {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}
.bounceLeft {
  animation: 0.3s ease-in-out forwards bounceLeft;
}
</style>
