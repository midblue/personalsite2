<template>
  <div>
    <div class="introEl"></div>

    <svg width="0" height="0">
      <defs>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white" />
          <circle r="50" cx="100" cy="100" fill="black" />
        </mask>

        <clipPath id="myClip">
          <rect x="0" y="0" width="1000" height="1000" mask="url(#hole)" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  props: [],
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.introEl {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  background: rgba(255, 0, 255, 0.95);
  clip-path: url(#myClip);
}
</style>
