<template>
  <div id="app">
    <div
      class="tabbar"
      :style="{
        right:
          $route.path == '/datav1'
            ? '180px'
            : $route.path == '/datav2'
            ? '260px'
            : $route.path == '/datav3'
            ? '450px'
            : '',
        top: $route.path == '/datav3' ? '20px' : '32px',
      }"
    >
      <router-link to="/datav1" :class="{ selected: $route.path == '/datav1' }"
        >page1</router-link
      >
      <router-link to="/datav2" :class="{ selected: $route.path == '/datav2' }"
        >page2</router-link
      >
      <router-link to="/datav3" :class="{ selected: $route.path == '/datav3' }"
        >page3</router-link
      >
    </div>

    <div class="screen-full" v-if="$route.path != '/datav3'">
      <span v-show="!isFullscreen" @click="handleFullScreen">
        <i class="iconfont icon-quanping"></i>
        全屏模式
      </span>
      <span v-show="isFullscreen" @click="handleFullScreen">
        <i class="iconfont icon-quanping"></i>
        退出全屏
      </span>
    </div>
    <!-- <datav1 /> -->
    <router-view />
  </div>
</template>

<script>
import screenfull from "screenfull";
// import datav1 from "@/views/datav1/index.vue";

export default {
  name: "app",
  // components: {
  //   datav1,
  // },
  data() {
    return {
      isFullscreen: false, // 是否全屏
    };
  },
  methods: {
    handleFullScreen() {
      if (!screenfull.isEnabled) {
        alert("您的浏览器版本过低，不支持全屏浏览");
        return false;
      }
      screenfull.toggle();
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen;
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on("change", this.change);
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off("change", this.change);
      }
    },
  },
  beforeDestroy() {
    this.destroy();
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  min-width: 1360px;

  .tabbar {
    position: absolute;
    width: 200px;
    height: 120px;
    top: 30px;
    cursor: pointer;
    z-index: 1999;
    a {
      font-size: 16px;
      margin-right: 10px;
      display: none;
      color: #fff;
    }
    &:hover a {
      display: inline-block;
    }
    .selected {
      color: #32c5e9;
      font-weight: 700;
    }
  }

  .screen-full {
    position: absolute;
    top: 32px;
    right: 10px;
    cursor: pointer;
    z-index: 1999;
    color: #fff;
    .icon-quanping {
      margin-right: 10px;
    }
  }
}
</style>