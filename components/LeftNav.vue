<template>
  <nav class="flexcolumn hidescrollbar" v-if="!mobile">
    <div
      class="option flexcenter flexcolumn"
      v-for="(p, index) in elements"
      :ref="'option' + index"
      :key="index"
      :class="{ active: focusY === index, first: index === 0 }"
      :style="{ '--highlight-color': p.color }"
      @click="$emit('focusY', index)"
      v-tooltip="getTitle(p.elements[0].text)"
    >
      <!-- <div
        class="circle-wrap"
        :style="{
          '--percent': focusY === index ? (focusX + 1) / p.elements.length : 1,
        }"
      >
        <div class="circle">
          <div class="mask full">
            <div class="fill"></div>
          </div>
          <div class="mask half">
            <div class="fill"></div>
          </div>
        </div>
      </div> -->

      <div
        class="thumb flexcenter"
        v-html="
          (p.thumbnail || p.image)
            .replace(/large/g, 'tiny')
            .replace(/lazy/g, 'auto')
        "
        :style="{
          '--highlight-color': p.color,
        }"
      ></div>

      <div class="dots flex">
        <div
          v-for="(element, elIndex) in p.elements"
          :key="'dot' + elIndex + element"
        >
          <div
            class="dot"
            :class="{
              active: focusX === elIndex && focusY === index,
            }"
          ></div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import * as c from '~/assets/common'

export default Vue.extend({
  props: {
    elements: {},
    focusY: {
      type: Number,
      default: 0,
    },
    focusX: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState(['mobile']),
    debouncedScroll(): Function {
      return c.debounce(this.scrollToFocus, 300)
    },
  },
  watch: {
    focusY() {
      this.debouncedScroll()
    },
  },
  methods: {
    getTitle(p: string) {
      return (/<h1[^>]*?>(.*)<\/h1>/.exec(p || '')?.[1] || '')
        .replace('small', 'sub')
        .trim()
    },
    scrollToFocus() {
      this.$el.scrollTo({
        top: Math.max(
          0,
          ((this.$refs['option' + this.focusY] as HTMLElement[])?.[0]
            ?.offsetTop || 0) - 120,
        ),
        behavior: 'smooth',
      })
    },
  },
})
</script>

<style lang="scss">
nav {
  z-index: 3;
  user-select: none;
  width: var(--nav-width);
  height: 100vh;
  background: #222;
  overflow-y: auto;
  padding-bottom: 4rem;

  &:after {
    content: '';
    position: fixed;
    bottom: 0;
    z-index: 5;
    left: 0;
    width: var(--nav-width);
    height: 4rem;
    background: linear-gradient(to bottom, transparent, #222);
    pointer-events: none;
  }

  // .circle-wrap {
  //   --percent: 1;
  //   position: absolute;
  //   // top: 50%;
  //   // left: 50%;
  //   // transform: translate(-50%, -50%);
  //   z-index: 0;
  //   --circ-width: calc(var(--nav-width) * 0.8);
  //   width: var(--circ-width);
  //   height: var(--circ-width);
  //   border-radius: 50%;
  //   background-color: rgba(255, 255, 255, 0.2);

  //   transition: all 0.2s ease-in-out;
  // }

  // .circle-wrap .circle .mask,
  // .circle-wrap .circle .fill {
  //   width: var(--circ-width);
  //   height: var(--circ-width);
  //   position: absolute;
  //   border-radius: 50%;
  // }

  // .circle-wrap .circle .mask {
  //   clip: rect(
  //     0px,
  //     var(--circ-width),
  //     var(--circ-width),
  //     calc(var(--circ-width) / 2.01)
  //   );
  // }

  // .circle-wrap .circle .mask .fill {
  //   clip: rect(0px, calc(var(--circ-width) / 1.98), var(--circ-width), 0px);
  //   background-color: var(--highlight-color);
  // }

  // .circle-wrap .circle .mask.full,
  // .circle-wrap .circle .fill {
  //   transition: transform 0.5s ease-in-out;
  //   transform: rotate(calc(var(--percent) * 180deg));
  // }

  .option {
    width: var(--nav-width);
    height: calc(var(--nav-width) * 0.9);
    cursor: pointer;
    overflow: hidden;
    flex-shrink: 0;

    &:before {
      content: '';
      position: absolute;
      top: 0%;
      left: 0;
      width: 100%;
      height: 100%;
      transition: background 0.2s ease-in-out;
    }

    &.first {
      background: #111;
      height: calc(var(--nav-width) * 1.1);
      justify-content: flex-start;
      padding-top: 1rem;
      position: sticky;
      top: 0;
      z-index: 5;
      box-shadow: 0 0rem 0.8rem 0.8rem #222;

      &:before {
        background: transparent !important;
      }
    }

    &:nth-of-type(2) {
      padding-top: 0.5rem;
      height: calc(var(--nav-width) * 0.9 + 0.5rem);
    }

    & > * {
      transition: all 0.3s ease-in-out;
      transform: scale(0.85);

      // &.circle-wrap {
      //   transform: scale(0.8);
      // }
    }
  }

  picture,
  img {
    z-index: 2;
    width: calc(var(--nav-width) * 0.7);
    height: calc(var(--nav-width) * 0.7);
  }
  img {
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 0 0 2px var(--highlight-color, #bbb);
  }

  .thumb {
    transition: transform 0.3s ease-in-out;
  }

  .option.active,
  .option:hover {
    &:before {
      background: rgba(255, 255, 255, 0.2);
    }
  }
  .option.active {
    & > * {
      transform: scale(0.9);
      opacity: 1;
    }

    .thumb {
      transform: scale(0.9) translateY(-3px);
    }

    img {
      box-shadow: 0 0 0 3px var(--highlight-color, #bbb);
    }
  }
  .dots {
    position: absolute;
    bottom: calc(var(--nav-width) * 0.05);
    gap: 0.1rem;

    .dot {
      opacity: 0.5;
      width: calc(var(--nav-width) * 0.04);
      height: calc(var(--nav-width) * 0.04);
      background: #eee;
      border-radius: 50%;

      &.active {
        opacity: 1;
      }
    }
  }
  .first .dots {
    top: 88%;
  }
}
</style>
