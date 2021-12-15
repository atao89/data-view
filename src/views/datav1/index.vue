<template>
  <div id="data-view1">
    <dv-full-screen-container>
      <top-header />

      <div class="main-content">
        <digital-flop />

        <div class="block-left-right-content">
          <ranking-board />

          <div class="block-top-bottom-content">
            <div class="block-top-content">
              <rose-chart />

              <water-level-chart />

              <scroll-board />
            </div>

            <cards />
          </div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import TopHeader from "./top-header";
import DigitalFlop from "./digital-flop";
import RankingBoard from "./ranking-board";
import RoseChart from "./rose-chart";
import WaterLevelChart from "./water-level-chart";
import ScrollBoard from "./scroll-board";
import Cards from "./cards";

export default {
  name: "DataView1",
  components: {
    TopHeader,
    DigitalFlop,
    RankingBoard,
    RoseChart,
    WaterLevelChart,
    ScrollBoard,
    Cards,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
#data-view1 {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    // height: 100% !important;
    // background-image: url("../../assets/img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
    // overflow-x: hidden;
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    // overflow: hidden;
  }

  .block-left-right-content {
    flex: 1;
    display: flex;
    margin-top: 20px;
    // overflow: hidden;
  }

  .block-top-bottom-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding-left: 20px;
  }

  .block-top-content {
    height: 55%;
    display: flex;
    flex-grow: 0;
    box-sizing: border-box;
    padding-bottom: 20px;
  }
}
</style>