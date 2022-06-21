<!-- Please remove this file from your project -->
<template>
  <section
    class="paneElement"
    :class="{ focused: isFocused, mobile }"
    :style="{ '--index': index % 2, '--highlight-color': color }"
  >
    <div class="bg" v-if="image"></div>
    <div class="contents">
      <PaneElementImages :image="image" :class="{ noText: !text }" />

      <div class="tags" v-if="index === 0">
        <div class="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
      </div>

      <div
        class="text"
        v-if="text"
        v-html="text"
        :class="{ noImage: !image, first: index === 0 }"
      ></div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mapState } from 'vuex'
import * as c from '~/assets/common'

export default Vue.extend({
  props: {
    color: {
      type: String,
    },
    image: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    index: {
      type: Number,
      default: 0,
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  data() {
    return {
      isFocused: false,
    }
  },
  computed: {
    ...mapState(['mobile']),
  },
  async mounted() {
    const observer = new IntersectionObserver(
      async (entries) => {
        this.isFocused = entries[0].isIntersecting
        if (this.isFocused) {
          this.$emit('focused')
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
  methods: {},
})
</script>

<style lang="scss">
.paneElement {
  flex-shrink: 0;
  flex-grow: 0;
  flex-flow: row nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--pane-width);
  height: var(--pane-height);
  scroll-snap-align: center;
  overflow: hidden;

  // .bg {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   // background: white;
  //   z-index: 0;

  //   &:after {
  //     content: '';
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background: rgba(0, 0, 0, calc(0.03 * var(--index)));
  //   }
  // }

  .contents {
    display: flex;
    flex-direction: row;
    gap: 5vw;
    padding: 6vh 5vw 8vh 5vw;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out, opacity 0.2s;
    width: 100%;
    height: 100%;

    // background: radial-gradient(
    //   circle at 60% 50%,
    //   rgba(255, 255, 255, 0.5) 0%,
    //   rgba(255, 255, 255, 0) 50%
    // );
    // background: linear-gradient(
    //   90deg,
    //   var(--highlight-color) 0%,
    //   transparent 50%
    // );

    // transform: scale(0.98);
    // opacity: 0.5;
  }

  // &.focused {
  //   .contents {
  //     opacity: 1;
  //     transform: scale(1);
  //   }
  // }

  .text {
    pointer-events: none;
    position: relative;
    z-index: 3;
    flex-shrink: 0;
    width: calc(var(--pane-width) * 0.65);
    padding-right: calc(var(--pane-width) * 0.05);
    padding-left: calc(var(--pane-width) * 0.3);
    margin-left: calc(-1 * var(--pane-width) * 0.3);
    max-height: calc(max(var(--pane-height) * 0.85));
    overflow-y: auto;
    overflow-x: hidden;

    &.noImage {
      width: calc(min(var(--pane-width) * 0.9, 600px));
      padding-right: 0;
      padding-left: 0;
      margin-left: 0;

      &.first {
        width: calc(var(--pane-width) * 0.9);
      }
    }

    & > * {
      pointer-events: auto;
    }
  }

  // .contents:before {
  //   content: '';
  //   z-index: 0;
  //   position: absolute;
  //   top: 50%;
  //   left: 30%;
  //   transform: translateY(-50%);
  //   display: block;
  //   width: 60%;
  //   border-radius: 50%;
  //   height: 80%;
  //   background: white;
  //   filter: blur(5rem);
  //   opacity: 0.2;
  // }

  &.mobile {
    .contents {
      flex-direction: column;
      gap: 1.5rem;
      padding: 1.5rem 2rem 2.5rem 2rem;
      background: transparent;

      &:before {
        display: none;
      }

      .paneElementImage img {
        max-width: 100%;
        max-height: 40vh;
      }
      .text {
        width: 100%;
        max-height: 40vh;

        &.noImage {
          width: 100%;
          max-height: 90%;
        }
      }
    }
  }

  .tags {
    position: absolute;
    top: 1rem;
    right: 1rem;

    .tag {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      display: inline-block;
      padding: 0.2rem 0.4rem;
      border-radius: 5px;
      background: var(--text);
      color: var(--highlight-color);
      margin-right: 0.5rem;
    }
  }
}
</style>
