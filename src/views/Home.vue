<template>
  <div class="wrap">
    <h1 class="title">便携小空调</h1>
    <div class="tips">
      <i class="iconfont icontishi"></i>
      <span>Tip: 为你的夏日带去清凉！</span>
    </div>
    <Conditioner></Conditioner>
    <Btns></Btns>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import Conditioner from '../components/Conditioner'
import Btns from '../components/Btns'
export default {
  name: 'Home',
  components: {
    Conditioner,
    Btns
  },
  setup() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  box-sizing: border-box;
  padding: 32px 16px 0;
  .title {
    font-weight: 400;
    font-size: 32px;
    line-height: 1.235;
    letter-spacing: 0.00735em;
    text-align: center;
    margin-bottom: 0.35em;
    color: rgba(0, 0, 0, 0.87);
  }
  .tips {
    text-align: center;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    margin: 24px 0;
    .icontishi {
      margin-right: 4px;
      font-size: 16px;
    }
  }
}
</style>
