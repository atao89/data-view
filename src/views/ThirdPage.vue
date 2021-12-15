<template>
  <div class="third-page">
    <dv-border-box-8>
      <div class="page_head">
        <dv-decoration-5 style="height: 60px" />
        <dv-decoration-11 style="height: 60px"> page3 </dv-decoration-11>
        <dv-decoration-5 style="height: 60px" />
      </div>

      <dv-full-screen-container>
        <div class="container-item">1</div>
        <div class="container-item">2</div>
        <div class="container-item">3</div>
        <div class="container-item">4</div>
        <div class="container-item">5</div>
        <div class="container-item">6</div>
      </dv-full-screen-container>
    </dv-border-box-8>
  </div>
</template>

<script>
export default {
  name: "ThirdPage",
};
</script>

<style lang="scss" scoped>
.third-page {
  height: 100%;
  display: flex;

  .page_head {
    height: 60px;
    display: flex;
    /deep/ .dv-decoration-5,
    /deep/ .dv-decoration-11 {
      width: 33.33%;
    }
  }

  /deep/ #dv-full-screen-container {
    height: calc(100vh - 60px) !important;
    display: flex;
    flex-wrap: wrap;

    .container-item {
      width: 33.33%;
      height: 50%;
      // overflow-x: hidden;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>