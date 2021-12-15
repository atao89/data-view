<template>
  <div id="app">
    <div class="tabbar">
      <router-link to="/home" :class="{ selected: $route.path == '/home' }"
        >page1</router-link
      >
      <router-link
        to="/second-page"
        :class="{ selected: $route.path == '/second-page' }"
        >page2</router-link
      >
      <router-link
        to="/third-page"
        :class="{ selected: $route.path == '/third-page' }"
        >page3</router-link
      >
    </div>
    <div class="screen-full">
      <span v-show="!isFullscreen" @click="handleFullScreen">
        <i class="iconfont icon-quanping"></i>
        全屏模式
      </span>
      <span v-show="isFullscreen" @click="handleFullScreen">
        <i class="iconfont icon-quanping"></i>
        退出全屏
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "App",
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
  color: #fff;
  background: #282c34;
  .tabbar {
    position: absolute;
    width: 200px;
    height: 120px;
    top: 30px;
    right: 160px;
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
    top: 30px;
    right: 10px;
    cursor: pointer;
    z-index: 1999;
    .icon-quanping {
      margin-right: 10px;
    }
  }
}
</style>
