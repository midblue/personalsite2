<template>
  <div
    class="lightbox"
    :class="{ on: src ? true : false }"
    @click="close"
  >
    <div
      v-if="src"
      :style="{ 'background-image': `url('${src}')` }"
      class="lightboximage"
    ></div>
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {}
  },
  computed: {
    src() {
      return this.$store.state.lightboxSrc
    },
  },
  watch: {},
  mounted() {},
  methods: {
    close() {
      this.$store.commit('set', { lightboxSrc: null })
    },
  },
}
</script>
<style lang="scss" scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(black, 0.8);
  padding: 2%;
  transition: all 0.3s;
  opacity: 0;
  pointer-events: none;
  z-index: 1000;
  cursor: zoom-out;

  &.on {
    opacity: 1;
    pointer-events: auto;
  }
}

.lightboximage {
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  z-index: 1;
}
</style>
