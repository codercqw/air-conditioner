<template>
  <div class="conditioner-wrap">
    <div class="conditioner">
      <transition name="fade">
        <!-- 显示屏（温度/图标） -->
        <div class="temperature-wrap" v-show="info.power">
          <div class="icon-wrap">
            <i>{{ info.mode == 'hot' ? '☀️' : '❄' }}</i>
          </div>
          <div class="temperature-box">
            <span class="temperature">{{ info.temperature }}</span>
            <span class="unit">°C</span>
          </div>
        </div>
      </transition>

      <!-- 能效区域 -->
      <div class="energy-wrap">
        <div class="makeStyles-energyLabel-6 MuiBox-root css-1wt0jtr">
          <div class="MuiBox-root css-zr6tlc">
            <div class="MuiBox-root css-bmbyv"></div>
            <div class="MuiBox-root css-bmbyv"></div>
            <div class="MuiBox-root css-bmbyv"></div>
            <div class="MuiBox-root css-bmbyv"></div>
            <div class="MuiBox-root css-bmbyv"></div>
            <div class="MuiBox-root css-bmbyv"></div>
          </div>
          <div class="MuiBox-root css-bslt8v">
            <div
              class="MuiGrid-root MuiGrid-container css-15fev7r-MuiGrid-root"
            >
              <div class="MuiBox-root css-vpg1qk"></div>
              <div
                class="MuiBox-root css-1rpvacm"
                style="border-width: 1.5px 2px 1.5px 0px; border-style: solid; border-color: transparent green transparent transparent;"
              ></div>
              <div class="MuiBox-root css-694q0m"></div>
            </div>
            <div class="MuiBox-root css-oqo5g9"></div>
            <div class="MuiBox-root css-1p5thl9"></div>
            <div class="MuiBox-root css-54op00"></div>
            <div class="MuiBox-root css-1xks341"></div>
          </div>
          <div class="MuiBox-root css-1cxjp41">
            <div class="MuiBox-root css-zr6tlc">
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
              <div class="MuiBox-root css-1romlnn"></div>
            </div>
            <div class="MuiBox-root css-197fynd"></div>
            <div class="MuiBox-root css-zr6tlc">
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
              <div class="MuiBox-root css-1pnhetw"></div>
            </div>
            <div class="MuiBox-root css-zr6tlc">
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
              <div class="MuiBox-root css-eex56h"></div>
            </div>
          </div>
          <div class="MuiBox-root css-zr6tlc">
            <div class="MuiBox-root css-143pxzb"></div>
            <div class="MuiBox-root css-143pxzb"></div>
            <div class="MuiBox-root css-143pxzb"></div>
            <div class="MuiBox-root css-143pxzb"></div>
            <div class="MuiBox-root css-143pxzb"></div>
            <div class="MuiBox-root css-143pxzb"></div>
            <div class="MuiBox-root css-143pxzb"></div>
            <div class="MuiBox-root css-143pxzb"></div>
          </div>
        </div>
      </div>
      <!-- logo -->
      <div class="logo-wrap">
        <i class="iconfont icongeli"></i>
      </div>
      <!-- 横线 -->
      <div class="horizontalLine"></div>
      <!-- 开关指示灯 -->
      <div
        class="indicatorLight"
        :style="{ backgroundColor: info.power ? '#38f709' : '#cccccc' }"
      ></div>
    </div>
    <!-- 气 -->
    <transition name="fade">
      <div class="air-wrap" v-show="info.power">
        <div class="air-item"></div>
        <div class="air-item"></div>
        <div class="air-item"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Conditioner',
  setup() {
    const store = useStore()
    let info = computed(() => store.state.info)
    return { info }
  }
}
</script>

<style lang="less" scoped>
i {
  font-size: 16px;
}

.conditioner-wrap {
  height: 210px;
  .conditioner {
    background-color: #fff;
    height: 150px;
    border: 1px solid;
    border-color: #e0e0e0;
    border-radius: 40px;
    box-shadow: 0 2px 7px 2px rgba(0, 0, 0, 0.12);
    position: relative;
    border-radius: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    .temperature-wrap {
      position: absolute;
      top: 25px;
      right: 30px;
      color: #cccccc;

      .temperature-box {
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
        font-weight: 400;
        font-size: 32px;
        line-height: 1.235;
        letter-spacing: 0.00735em;
        text-align: center;
        .temperature {
          text-shadow: 0 0 2px rgb(0 0 0 / 10%);
          font-family: 'Digital-7 Mono';
        }
        .unit {
          font-family: 'Digital-7 Mono';
          font-size: 28px;
        }
      }
    }
    .energy-wrap {
      position: absolute;
      top: 10px;
      left: 10px;
      height: 70px;
      width: 50px;
      border-radius: 8px;
      padding: 4px;
      background-color: #4ea5f5;
      .css-zr6tlc {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        .css-bmbyv {
          margin-left: 2px;
          margin-right: 2px;
          margin-top: 0px;
          margin-bottom: 0px;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: white;
          box-sizing: border-box;
        }
      }
      .css-bslt8v {
        margin-top: 4px;
        margin-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 2px;
        padding-bottom: 2px;
        height: 28px;
        width: 100%;
        background-color: #fff;
        .css-15fev7r-MuiGrid-root {
          box-sizing: border-box;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex-wrap: wrap;
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          width: 100%;
          .css-vpg1qk {
            background-color: green;
            height: 3px;
            width: 40%;
          }
          .css-1rpvacm {
            height: 3px;
            margin-left: 40%;
            border-width: 1.5px 2px 1.5px 0px;
            border-style: solid;
            border-color: transparent green transparent transparent;
          }
          .css-694q0m {
            background-color: green;
            height: 3px;
            width: 10%;
          }
        }
        .css-oqo5g9 {
          margin-top: 2px;
          background-color: lightGreen;
          height: 3px;
          width: 50%;
        }
        .css-1p5thl9 {
          margin-top: 2px;
          background-color: #ffc107;
          height: 3px;
          width: 60%;
        }
        .css-54op00 {
          margin-top: 2px;
          background-color: orange;
          height: 3px;
          width: 70%;
        }
        .css-1xks341 {
          margin-top: 2px;
          background-color: red;
          height: 3px;
          width: 80%;
        }
      }
      .css-1cxjp41 {
        margin-bottom: 2px;
        padding-top: 0.8px;
        height: 20px;
        width: 100%;
        background-color: #fff;
        .css-zr6tlc {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          .css-1romlnn {
            margin-left: 0.8px;
            margin-right: 0.8px;
            margin-top: 2px;
            margin-bottom: 2px;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background-color: black;
          }
        }
        .css-197fynd {
          margin-top: 0.8px;
          margin-bottom: 0.8px;
          border-top: 1px solid;
          height: 0%;
          width: 100%;
        }
        .css-zr6tlc {
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          .css-1pnhetw {
            margin-left: 0.8px;
            margin-right: 0.8px;
            margin-top: 2px;
            margin-bottom: 2px;
            width: 1.5px;
            height: 1.5px;
            border-radius: 50%;
            background-color: black;
          }
        }
      }
      .css-zr6tlc {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        .css-eex56h {
          margin-left: 0.8px;
          margin-right: 0.8px;
          margin-top: 0px;
          margin-bottom: 0px;
          width: 1.2px;
          height: 1.2px;
          border-radius: 50%;
          background-color: black;
        }
        .css-143pxzb {
          margin-left: 0.8px;
          margin-right: 0.8px;
          margin-top: 0px;
          margin-bottom: 0px;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background-color: white;
        }
      }
    }
    .logo-wrap {
      text-align: center;
      margin-top: 96px;
      .icongeli {
        font-size: 16px;
      }
    }
    .horizontalLine {
      margin-top: 8px;
      border: 1px solid;
      border-color: #e0e0e0;
    }
    .indicatorLight {
      position: absolute;
      height: 4px;
      width: 4px;
      border-radius: 50%;
      top: 130px;
      right: 10px;
      background-color: rgb(56, 247, 9);
    }
  }
  .air-wrap {
    padding-top: 20px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    .air-item {
      background-color: #bbbbbb;
      width: 5px;
      height: 40px;
      &:nth-child(1) {
        transform: rotate(10deg);
      }
      &:nth-child(2) {
        margin-left: 80px;
        margin-right: 80px;
        background-color: #bbbbbb;
      }
      &:nth-child(3) {
        transform: rotate(-10deg);
      }
    }
  }
}
</style>
