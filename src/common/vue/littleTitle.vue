<template>
  <div class="l-title">
    <p>
      {{text}}
    </p>
  </div>
</template>

<script>
  export default {
    props: ['text']
  }
</script>

<style type="text/scss" scope lang="scss">
  @import "../../common/css/base.scss";
  @import "../../common/css/common.scss";

  .l-title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 100vw;
    height: auto;
    font-size: $FontSize;
    p{
      line-height: 48rpx;
    }
  }
</style>
