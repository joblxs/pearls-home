<template>
  <div class="footer">
    <div class="copyright">
      <lay-container fluid>
        <lay-row class="layui-row">
          <lay-col md="24" sm="24" xs="24" class="hitokoto wow animate__animated animate__backInDown">
            <div class="uptime">{{ uptime }}</div>
            <br/>
            <p>Copyright &copy; 个人主页 All Rights Reserved
              <a href="http://www.beian.miit.gov.cn" target="_blank" rel="nofollow">冀ICP备2024067055号</a>
            </p>
          </lay-col>
        </lay-row>
      </lay-container>
    </div>
  </div>
</template>

<script>
import {ref, onMounted, onUnmounted} from 'vue';

export default {
  setup() {
    const uptime = ref('');

    // 网站启动的时间戳
    const siteStartTime = ref(new Date('2024-04-13 00:00:00'));

    function updateUptime() {
      const now = new Date();
      const diff = now - siteStartTime.value; // 计算时间差
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString();
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');

      uptime.value = `本站已运行${days}天 ${hours}时${minutes}分${seconds}秒`;
    }

    let timerID;
    onMounted(() => {
      updateUptime();
      timerID = setInterval(updateUptime, 1000);
    });

    onUnmounted(() => {
      clearInterval(timerID);
    });

    return {
      uptime
    };
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  text-align: center;
  padding: 20px 0;
}

.layui-row {
  text-align: center;
  margin: 0 auto;
  max-width: 800px;
}
</style>