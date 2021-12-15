<template>
  <div class="home">
    <dv-full-screen-container>
      <!-- <dv-loading>拼命加载中。。。</dv-loading> -->
      <!-- <dv-border-box-1 :color="['red', 'green']" backgroundColor="blue" >dv-border-box-1</dv-border-box-1> -->

      <div class="container-item">
        <dv-border-box-1>dv-border-box-1</dv-border-box-1>
      </div>
      <div class="container-item">
        <dv-border-box-2>dv-border-box-2</dv-border-box-2>
      </div>
      <div class="container-item">
        <dv-border-box-3>dv-border-box-3</dv-border-box-3>
      </div>
      <div class="container-item">
        <dv-border-box-4>dv-border-box-4</dv-border-box-4>
        <!-- <dv-border-box-4 :reverse="true">dv-border-box-4</dv-border-box-4> -->
      </div>
      <div class="container-item">
        <dv-border-box-5>dv-border-box-5</dv-border-box-5>
        <!-- <dv-border-box-5 :reverse="true">dv-border-box-5</dv-border-box-5> -->
      </div>
      <div class="container-item">
        <dv-border-box-6>dv-border-box-6</dv-border-box-6>
      </div>
      <div class="container-item">
        <dv-border-box-7>dv-border-box-7</dv-border-box-7>
      </div>
      <div class="container-item">
        <dv-border-box-8>dv-border-box-8</dv-border-box-8>
        <!-- <dv-border-box-8 :reverse="true">dv-border-box-8</dv-border-box-8> -->
      </div>
      <div class="container-item">
        <dv-border-box-9>dv-border-box-9</dv-border-box-9>
      </div>
      <div class="container-item">
        <dv-border-box-10>dv-border-box-10</dv-border-box-10>
      </div>
      <div class="container-item">
        <dv-border-box-11 title="dv-border-box-11">
          dv-border-box-11
        </dv-border-box-11>
      </div>
      <div class="container-item">
        <dv-border-box-12>dv-border-box-12</dv-border-box-12>
      </div>
      <div class="container-item">
        <dv-border-box-13>dv-border-box-13</dv-border-box-13>
      </div>
      <div class="container-item container-item14">
        <!-- <dv-decoration-1 :color="['red', 'green']" />
        <dv-decoration-1 style="width: 200px; height: 50px" />
        <dv-decoration-2 style="width: 200px; height: 5px" />
        <dv-decoration-3 style="width: 250px; height: 30px" />
        <dv-decoration-4 style="width: 5px; height: 150px" />
        <dv-decoration-4 :reverse="true" style="width: 250px; height: 5px" />
        <dv-decoration-5 style="width: 300px; height: 40px" />
        <dv-decoration-6 style="width: 300px; height: 30px" />
        <dv-decoration-7 style="width: 150px; height: 30px"
          >Decoration</dv-decoration-7
        >
        <dv-decoration-8 style="width: 300px; height: 50px" />
        <dv-decoration-8 :reverse="true" style="width: 300px; height: 50px" />
        <dv-decoration-9 style="width: 150px; height: 150px"
          >66%</dv-decoration-9
        >
        <dv-decoration-10 style="width: 90%; height: 5px" />
        <dv-decoration-11 style="width: 200px; height: 60px"
          >dv-decoration-11</dv-decoration-11
        >
        <dv-decoration-12 style="width: 150px; height: 150px" /> -->
        <dv-charts :option="option1" />
      </div>
      <div class="container-item">
        <dv-active-ring-chart
          :config="config1"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="container-item">
        <dv-capsule-chart
          :config="config2"
          style="width: 200px; height: 150px"
        />
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      option1: {
        title: {
          text: "剩余油量表",
          style: {
            fill: "#fff",
          },
        },
        series: [
          {
            type: "gauge",
            data: [{ name: "itemA", value: 55 }],
            center: ["50%", "55%"],
            axisLabel: {
              formatter: "{value}%",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            animationCurve: "easeInOutBack",
          },
        ],
      },
      config1: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
      },
      config2: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 67,
          },
          {
            name: "漯河",
            value: 123,
          },
          {
            name: "郑州",
            value: 55,
          },
          {
            name: "西峡",
            value: 98,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  /deep/ #dv-full-screen-container {
    height: 100% !important;
    display: flex;
    flex-wrap: wrap;
    .container-item {
      width: 25%;
      height: 25%;
      // overflow-x: hidden;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>