<template>
  <div class="loading">
    <div class="loading__spinner"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import * as c from '~/assets/common'

export default Vue.extend({
  data() {
    return {}
  },

  computed: {},
})
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading__spinner {
    width: 30px;
    height: 30px;
    border: 5px solid #e7e7e7;
    border-top: 5px solid #999;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
