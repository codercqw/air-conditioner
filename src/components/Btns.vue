<template>
  <div class="Btns">
    <div class="topBtn">
      <van-button class="btn" color="#3D51BF" @click="changeMode('cold')">
        <i class="iconfont iconzhileng"></i>
      </van-button>
      <!-- 开关 -->
      <van-button
        class="btn"
        :color="info.power ? '#FF005A' : '#4CAF50'"
        @click="changePower"
      >
        <i class="iconfont iconguanji"></i>
      </van-button>
      <van-button class="btn" color="#FFA400" @click="changeMode('hot')">
        <i class="iconfont iconzhire"></i>
      </van-button>
    </div>
    <div class="botBtn">
      <van-button
        class="btn"
        :key="1"
        color="#E0E0E0"
        @click="changeteMperature(1)"
      >
        <i class="iconfont iconduanjiantouyou-copy-copy"></i>
      </van-button>
      <van-button
        class="btn"
        :key="2"
        color="#E0E0E0"
        @click="changeteMperature(-1)"
      >
        <i class="iconfont iconduanjiantouyou"></i>
      </van-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
import { Notify } from 'vant'
export default {
  name: 'Btns',
  setup() {
    let store = useStore()
    let info = computed(() => store.state.info)
    const changePower = () => {
      store.commit('set_power', !info.value.power)
    }
    const changeMode = (mode) => {
      if (!info.value.power) return
      store.commit('set_mode', mode)
    }
    const changeteMperature = (temperature) => {
      if (!info.value.power) return
      if (temperature == 1) {
        if (info.value.temperature == 31) {
          Notify({ type: 'warning', message: '已经是最大温度啦！' })
          return
        }
      }
      if (temperature == -1) {
        if (info.value.temperature == 16) {
          Notify({ type: 'warning', message: '已经是最小温度啦！' })
          return
        }
      }
      store.commit('set_temperature', temperature)
    }
    return {
      info,
      changePower,
      changeMode,
      changeteMperature
    }
  }
}
</script>

<style lang="less" scoped>
.van-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  padding: 0;
  text-align: center;
  box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.5);
  border: 0;
}
.Btns {
  margin-top: 60px;
  i {
    font-size: 20px;
  }
  .topBtn {
    display: flex;
    justify-content: center;
    .btn {
      margin: 10px;
    }
  }
  .botBtn {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .btn {
      margin: 10px;
    }
    i {
      color: #000000;
    }
  }
}
</style>
