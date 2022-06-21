<!-- Please remove this file from your project -->
<template>
  <div class="paneElementImage" v-html="image" ref="image"></div>
  <!-- 
    <template v-else>
      <div :class="wrapperClass">
        <template v-for="(image, index) in parsedImageElements">
          <img
            v-if="image.sizes.length"
            :src="image.sizes[0].src"
            :key="image.sizes[0].src + index"
          />
        </template>
      </div>
      <div class="caption" v-if="caption">{{ caption }}</div>
    </template> -->
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import * as c from '~/assets/common'

interface ImageData {
  sizes: { maxSize?: number; src: string }[]
}

export default Vue.extend({
  props: {
    image: {
      type: String,
      default: null,
    },
  },
  data() {
    return {}
  },
  computed: {
    // parsedImageElements(): ImageData[] | null {
    //   if (!this.image) return null
    //   const pictureTags = this.image.matchAll(/<picture(?:.*)?<\/picture>/g)
    //   const result: ImageData[] = []
    //   for (const pictureTag of pictureTags) {
    //     let imageData: ImageData = { sizes: [] }
    //     const sizeMatches = pictureTag[0].matchAll(/<source ([^>]*)>/g)
    //     for (let sizeMatch of sizeMatches) {
    //       const src = /srcset=(?:'|")([^"']*)(?:'|")/g.exec(sizeMatch[0])?.[1]
    //       const size = /media=(?:'|").*?(\d+).*?(?:'|")/g.exec(
    //         sizeMatch[0],
    //       )?.[1]
    //       if (!src || !size) continue
    //       imageData.sizes.push({
    //         maxSize: parseInt(size),
    //         src,
    //       })
    //     }
    //     // get same stuff from img element
    //     const src = /<img (?:.*?) ?src=(?:'|")(.*)(?:'|")/g.exec(
    //       pictureTag[0],
    //     )?.[1]
    //     if (src) imageData.sizes.push({ src })
    //     result.push(imageData)
    //   }
    //   if (result.length) return result
    //   return null
    // },
    // wrapperClass(): string | null {
    //   if (!this.parsedImageElements?.length) return null
    //   c.log(this.image.split('<picture')[0])
    //   return (
    //     /<div class=(?:'|")(.*?)(?:'|")/g.exec(
    //       this.image.split('<picture')[0],
    //     )?.[1] || null
    //   )
    // },
    // caption(): string | null {
    //   if (!this.parsedImageElements?.length) return null
    //   return (
    //     /<div class=(?:'|")caption(?:.*?)>(.*?)<\/div>/g.exec(
    //       this.image,
    //     )?.[1] || null
    //   )
    // },
  },
  async mounted() {
    // lightbox on images
    await this.$nextTick()
    ;(this.$refs.image as HTMLElement)
      ?.querySelectorAll('img')
      .forEach((img: HTMLImageElement) => {
        img.addEventListener('click', () => {
          this.$store.commit('set', { lightboxSrc: img.src })
        })
      })
  },
  methods: {
    getLightboxSrc(s: string) {
      return /src=(?:'|")(.*?)(?:'|")/.exec(s)?.[1] || null
    },
  },
})
</script>

<style lang="scss">
.paneElementImage {
  z-index: 2;

  picture {
    display: block;
  }

  picture:not(:last-child) {
    img {
      margin-bottom: 1rem;
    }
  }

  picture,
  .iframeholder {
    &:before {
      z-index: 1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: 0 0.1rem 0.3rem var(--highlight-color, rgba(0, 0, 0, 1)),
        0 1rem 3rem var(--highlight-color, rgba(0, 0, 0, 1));
      border-radius: 5px;
    }
    // &:after {
    //   z-index: 1;
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   // box-shadow: 0 0.05rem 0.3rem rgba(0, 0, 0, 0.5),
    //   //   0 0.25rem 2rem rgba(0, 0, 0, 0.5);
    //   mix-blend-mode: overlay;
    //   border-radius: 5px;
    // }
  }

  img {
    cursor: zoom-in;
  }

  img,
  iframe {
    z-index: 2;
    display: block;
    max-width: calc(var(--pane-width) * 0.5);
    max-height: calc(max(var(--pane-height) * 0.8));
    border-radius: 5px;
  }
  .iframeholder {
    min-width: calc(var(--pane-width) * 0.5);
    width: 100%;
    padding-top: 56.25%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .grid3,
  .grid2 {
    picture:not(:last-child) {
      img {
        margin-bottom: 0rem;
        border-radius: 0px;
      }
    }
  }

  &.noText {
    img,
    iframe {
      max-width: calc(var(--pane-width) * 0.8);
    }
  }
}

.mobile {
  .iframeholder {
    min-width: calc(var(--pane-width) * 0.85);
  }

  img,
  iframe {
    max-width: calc(var(--pane-width) * 0.85);
  }
}
</style>
