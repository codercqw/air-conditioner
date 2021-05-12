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
  <div class="audios">
    <audio id="di" preload="auto">
      <source src="../assets/audio/di.mp3" />
    </audio>
    <audio id="ac-work" preload="auto">
      <source src="../assets/audio/ac-work.mp3" />
    </audio>
    <audio id="air-extractor-fan" preload="auto">
      <source src="../assets/audio/air-extractor-fan.mp3" />
    </audio>
  </div>
</template>

<script>
import { reactive, toRefs, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { Notify } from 'vant'
export default {
  name: 'Btns',
  setup() {
    let store = useStore()
    let info = computed(() => store.state.info)
    // 噪音起始时间
    const noiseStartTime = 2
    // 噪音持续时间
    const noiseDuration = 56
    let timeoutId = null
    let intervalId = null
    const changePower = () => {
      playDi()
      if (info.value.power) {
        document.getElementById('ac-work').load()
        const acWork = document.getElementById('air-extractor-fan')
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        if (intervalId) {
          clearInterval(intervalId)
        }
        acWork.currentTime = noiseStartTime + noiseDuration
      } else {
        playStartSound()
      }
      store.commit('set_power', !info.value.power)
    }

    const changeMode = (mode) => {
      if (!info.value.power) return
      playDi()
      store.commit('set_mode', mode)
    }

    const changeteMperature = (temperature) => {
      if (!info.value.power) return
      playDi()
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

    const playDi = () => {
      const di = document.getElementById('di')
      di.play()
    }
    /**
     * 启动音
     */
    const playStartSound = () => {
      const acStart = document.getElementById('ac-work')
      acStart.load()
      acStart.play()
      setTimeout(() => {
        playWorkSound()
      }, 8000)
    }

    /**
     * 播放空调工作声音
     */
    function playWorkSound() {
      const acWork = document.getElementById('air-extractor-fan')
      acWork.load()
      acWork.play()

      timeoutId = setTimeout(() => {
        intervalId = setInterval(() => {
          acWork.currentTime = noiseStartTime
        }, noiseDuration * 1000)
      }, noiseStartTime * 1000)
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
