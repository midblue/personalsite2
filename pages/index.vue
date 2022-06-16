<template>
  <div class="contents" :class="{ mobile }">
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
        @down="down"
        @up="up"
        @focusY="setFocusY(index)"
        @focusX="setFocusX"
        :forceFocusX="forceFocusX"
        :index="index"
      />
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
          v-if="elements[focusY].elements.length"
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
  async asyncData({ $axios, store, redirect }) {
    const contentDoc = '1rFcSntbispfYHagAX129_qcoHpbqfmsNn1P67Ncjg4I'
    let data = await $axios
      .get(
        // todo change back to 'doc'
        `https://us-central1-lix-338122.cloudfunctions.net/refresh/${contentDoc}`,
      )
      .then((res) => {
        if (res.status === 500) return
        return res.data
      })
    if (!data) return

    let { content } = c.extractDataFrom3Lix(data) as any

    const contentWithElementsBrokenOut =
      content
        .map((co: any) => {
          if (!co.color) return
          return {
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
                // const imageRegex =
                //   /<(?:div|picture|iframe).*?<\/(picture|iframe)>(?:<\/div>)?/g
                // let imageMatch = imageRegex.exec(content)
                // while (imageMatch) {
                //   image.push(imageMatch[0])
                //   imageMatch = imageRegex.exec(content)
                // }
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
    return {
      elements: contentWithElementsBrokenOut,
    }
  },
  data() {
    return {
      focusX: 0,
      focusY: 0,
      forceFocusX: 0,
    }
  },

  computed: {
    ...mapState(['mobile']),
    hasNext(): boolean {
      return (
        this.focusX !== (this as any).elements[this.focusY].elements.length - 1
      )
    },
    hasPrevious(): boolean {
      return this.focusX !== 0
    },
    hasUp(): boolean {
      return this.focusY !== 0
    },
    hasDown(): boolean {
      return this.focusY !== (this as any).elements.length - 1
    },
  },

  mounted() {
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
    })
  },
  methods: {
    setFocusY(index: number) {
      this.focusY = index
      this.focusX = 0
      this.forceFocusX = -1
    },
    forceFocusY(index: number) {
      this.focusY = index
      this.focusX = 0
      this.forceFocusX = -1
      ;(this.$refs.main as HTMLElement).scrollTo(
        0,
        ((this.$refs.main as HTMLElement).scrollHeight /
          (this as any).elements.length) *
          index,
      )
    },
    setFocusX(index: number) {
      this.focusX = index
    },
    down() {
      // scroll 100% down
      if (!this.$refs.main) return
      ;(this.$refs.main as HTMLElement).scrollTop +=
        (this.$refs.main as HTMLElement).scrollHeight /
        (this as any).elements.length
      this.forceFocusX = -1
    },
    up() {
      // scroll 100% up
      if (!this.$refs.main) return
      ;(this.$refs.main as HTMLElement).scrollTop -=
        (this.$refs.main as HTMLElement).scrollHeight /
        (this as any).elements.length
      this.forceFocusX = -1
    },
    next() {
      this.forceFocusX = Math.min(
        this.focusX + 1,
        (this as any).elements[this.focusY].elements.length - 1,
      )
    },
    previous() {
      this.forceFocusX = Math.max(0, this.focusX - 1)
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
}
.navigators {
  position: absolute;
  right: 0;
  top: 0;
  height: var(--pane-height);
  width: var(--pane-width);
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
  pointer-events: none;
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
</style>
