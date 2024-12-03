<template>
  <div>
    <vue-particles id="tsparticles" :key="newTheme" :options="particlesOption" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['color', 'theme'])
  },
  watch: {
    color(newColorValue) {
      this.newColor = newColorValue;
      this.particlesOption.particles.color.value = this.newColor;
    },
    theme(newThemeValue) {
      this.newTheme = newThemeValue;
      this.particlesOption.particles.color.value = this.newColor;
    }
  },
  created() {
    this.newColor = this.color;
    this.newTheme = this.theme;
    this.particlesOption.particles.color.value = this.newColor;
  },
  data() {
    return {
      newColor: '#000',
      newTheme: '',
      particlesOption: {
        "fpsLimit": 60, // 控制粒子系统的帧率限制，设置为60帧每秒
        "interactivity": {
          // "detectsOn": "canvas", // 检测交互的元素，设置为canvas元素
          "events": {
            "onClick": {
              "enable": false, // 是否启用点击事件
              "mode": "push" // 点击时的交互模式，设置为推动粒子
            },
            "onHover": {
              "enable": false, // 是否启用鼠标悬停事件
              "mode": "repulse", // 鼠标悬停时的交互模式，设置为排斥粒子
              "parallax": {
                "enable": false, // 是否启用视差效果
                "force": 40, // 视差效果的强度
                "smooth": 10 // 视差效果的平滑度
              }
            }
          },
          "modes": {
            "bubble": {
              "distance": 400, // 泡泡模式影响的最大距离
              "duration": 2, // 泡泡模式的持续时间
              "opacity": 0.8, // 泡泡模式中粒子的透明度
              "size": 1 // 泡泡模式中粒子的大小
            },
            "repulse": {
              "distance": 200 // 排斥模式影响的最大距离
            }
          }
        },
        "particles": {
          "color": {
            "value": this.newColor // 粒子颜色，设置为白色
          },
          "links": {
            "color": "#ffffff", // 连接线的颜色，设置为白色
            "distance": 150, // 连接线的最大距离
            "enable": false, // 是否启用连接线
            "opacity": 0.5, // 连接线的透明度
            "width": 1 // 连接线的宽度
          },
          "collisions": {
            "enable": false // 是否启用粒子之间的碰撞
          },
          "move": {
            "direction": "top", // 粒子运动的方向，设置为无方向
            "enable": true, // 是否启用粒子运动
            "outModes": {
              "default": "out" // 粒子移出画布时的行为，设置为移出
            },
            "random": true, // 是否随机运动
            "speed": 2, // 粒子的速度
            "straight": false // 粒子是否直线运动
          },
          "number": {
            "density": {
              "enable": false, // 是否启用粒子密度配置
              "value_area": 800 // 粒子密度的影响区域
            },
            "value": 20 // 粒子的数量
          },
          "opacity": {
            "animation": {
              "enable": false, // 是否启用透明度动画
              "minimumValue": 0.1, // 透明度的最小值
              "speed": 2, // 透明度变化的速度
              "sync": false // 是否同步所有粒子的透明度变化
            },
            "random": true, // 是否随机透明度
            "value": 0.7 // 粒子的透明度
          },
          "shape": {
            "type": "circle" // 粒子的形状，设置为圆形
          },
          "size": {
            "animation": {
              "enable": false, // 是否启用大小动画
              "minimumValue": 0.1, // 大小的最小值
              "speed": 2, // 大小变化的速度
              "sync": false // 是否同步所有粒子的大小变化
            },
            "random": false, // 是否随机大小
            "value": {
              "min": 1, // 粒子的最小大小
              "max": 3 // 粒子的最大大小
            }
          },
          "lineLinked": {
            "enable": false, // 是否启用连接线
            "distance": 150, // 连接线的最大距离
            "color": "#ffffff", // 连接线的颜色
            "opacity": 0.5, // 连接线的透明度
            "width": 1 // 连接线的宽度
          }
        },
        "detectRetina": false // 是否检测设备的视网膜屏幕
      }
    }
  }
}
</script>

<style scoped>
#tsparticles {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1;
}
</style>