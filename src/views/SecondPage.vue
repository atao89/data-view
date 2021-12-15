<template>
  <div class="second-page">
    <dv-border-box-11 title="page2">
      <dv-full-screen-container>
        <div class="container-item container-item1">
          <dv-digital-flop
            :config="config1"
            style="width: 200px; height: 50px"
          />
          <span class="change_number" @click="changeNumber">切换数据</span>
        </div>
        <div class="container-item">2</div>
        <div class="container-item">3</div>
        <div class="container-item">
          <dv-flyline-chart-enhanced
            :config="config2"
            :dev="true"
            style="width: 100%; height: 100%"
          />
        </div>
        <div class="container-item">
          <dv-loading>Loading...</dv-loading>
        </div>
        <div class="container-item">6</div>
        <div class="container-item">7</div>
        <div class="container-item">8</div>
        <div class="container-item">9</div>
      </dv-full-screen-container>
    </dv-border-box-11>
  </div>
</template>

<script>
const configA = {
  number: [100],
  content: "{nt}个",
};

const configB = {
  number: [999],
  content: "{nt}个",
};

export default {
  name: "SecondPage",
  data() {
    return {
      config1: configA,
      hasChange: false,
      config2: {
        points: [
          {
            name: "郑州",
            coordinate: [0.48, 0.35],
            icon: {
              src: require("assets/img/point.png"),
              width: 30,
              height: 30,
            },
            text: {
              color: "#fb7293",
            },
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23],
          },
          {
            name: "焦作",
            coordinate: [0.43, 0.29],
          },
          {
            name: "开封",
            coordinate: [0.59, 0.35],
          },
          {
            name: "许昌",
            coordinate: [0.53, 0.47],
          },
          {
            name: "平顶山",
            coordinate: [0.45, 0.54],
          },
          {
            name: "洛阳",
            coordinate: [0.36, 0.38],
          },
          {
            name: "周口",
            coordinate: [0.62, 0.55],
          },
          {
            name: "漯河",
            coordinate: [0.56, 0.56],
          },
          {
            name: "南阳",
            coordinate: [0.37, 0.66],
          },
          {
            name: "信阳",
            coordinate: [0.55, 0.81],
          },
          {
            name: "驻马店",
            coordinate: [0.55, 0.67],
          },
          {
            name: "济源",
            coordinate: [0.37, 0.29],
          },
          {
            name: "三门峡",
            coordinate: [0.2, 0.36],
          },
          {
            name: "商丘",
            coordinate: [0.76, 0.41],
          },
          {
            name: "鹤壁",
            coordinate: [0.59, 0.18],
          },
          {
            name: "濮阳",
            coordinate: [0.68, 0.17],
          },
          {
            name: "安阳",
            coordinate: [0.59, 0.1],
          },
        ],
        lines: [
          {
            source: "新乡",
            target: "郑州",
          },
          {
            source: "焦作",
            target: "郑州",
          },
          {
            source: "开封",
            target: "郑州",
          },
          {
            source: "许昌",
            target: "郑州",
          },
          {
            source: "平顶山",
            target: "郑州",
          },
          {
            source: "洛阳",
            target: "郑州",
          },
          {
            source: "周口",
            target: "郑州",
          },
          {
            source: "漯河",
            target: "郑州",
          },
          {
            source: "南阳",
            target: "郑州",
          },
          {
            source: "信阳",
            target: "郑州",
          },
          {
            source: "驻马店",
            target: "郑州",
          },
          {
            source: "济源",
            target: "郑州",
          },
          {
            source: "三门峡",
            target: "郑州",
          },
          {
            source: "商丘",
            target: "郑州",
          },
          {
            source: "鹤壁",
            target: "郑州",
          },
          {
            source: "濮阳",
            target: "郑州",
          },
          {
            source: "安阳",
            target: "郑州",
          },
        ],
        icon: {
          show: true,
          src: require("assets/img/point.png"),
        },
        text: {
          show: true,
        },
        bgImgSrc: require("assets/img/henan.svg"),
      },
    };
  },
  methods: {
    changeNumber() {
      this.hasChange = !this.hasChange;
      if (this.hasChange) {
        this.config1 = configB;
      } else {
        this.config1 = configA;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.second-page {
  height: 100%;

  /deep/ #dv-full-screen-container {
    height: 100% !important;
    display: flex;
    flex-wrap: wrap;
    .container-item {
      width: 33.33%;
      height: 33.33%;
      // overflow-x: hidden;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .change_number {
        width: 100px;
        height: 30px;
        display: none;
      }
    }
    .container-item1 {
      position: relative;
      &:hover .change_number {
        position: absolute;
        display: inline-block;
        right: 10px;
        bottom: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>