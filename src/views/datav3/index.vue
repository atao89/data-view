<template>
  <div id="data-view3">
    <dv-full-screen-container></dv-full-screen-container>
  </div>
</template>

<script>
export default {
  name: "DataView3",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#data-view3 {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("../../assets/img/bg2.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }
}
</style>
