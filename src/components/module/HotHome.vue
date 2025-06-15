<!--热榜-->
<template>
  <h1 class="wow animate__animated animate__zoomIn">歪贝热榜</h1>
  <div class="hot">
    <lay-container fluid>
      <lay-row space="30">
        <lay-col v-for="(item, index) in hotList" :key="index" md="8" sm="12" xs="24">
          <lay-card>
            <template v-slot:title>
              {{ item.title }}
            </template>
            <template v-slot:body>
              <ul class="hot-list-article wow animate__animated animate__zoomIn">
                <li v-for="(i, k) in item.list" :key="k">
                  <a :href="i.url" :title="i.title" target="_blank" rel="noopener noreferrer">{{ i.title }}</a>
                </li>
              </ul>
            </template>
<!--            <template v-slot:footer>-->
<!--              <time :datetime="item.updateTime" :title="item.updateTime" style="display: inline;">更新于<TimeFormat :date="item.updateTime" /></time>-->
<!--            </template>-->
          </lay-card>
        </lay-col>
      </lay-row>
    </lay-container>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
// import TimeFormat from '@/utils/TimeFormat.vue';

export default {
  components: {
    // TimeFormat
  },
  setup() {
    // 使用ref创建响应式数据
    const hotList = ref([]);

    // 定义一个函数来获取单个平台的热榜数据
    const fetchHotList = async (title) => {
      try {
        const response = await axios.get(`https://api.pearktrue.cn/api/social/hotlist.php?type=${encodeURIComponent(title)}`);
        return response.data;
      } catch (error) {
        console.error('请求热榜数据出错：', error);
        return [];
      }
    };

    // 定义需要获取数据的平台列表
    const platforms = ['知乎', '百度', '微博'];

    // 在组件挂载时获取数据
    onMounted(async () => {
      try {
        // 并行请求所有平台的数据
        const results = await Promise.allSettled(platforms.map(platform => fetchHotList(platform)));
        // 将结果存储到 hotList 中
        hotList.value = results
          .filter(result => result.status === 'fulfilled') // 只保留成功的请求
          .map((result, index) => ({
            title: platforms[index], // 使用平台名称作为标题
            updateTime: result.value.updateTime, // 从 API 获取的更新时间
            list: result.value.data // 从 API 获取的数据列表
          }));
      } catch (error) {
        console.error('请求热榜数据出错：', error);
        hotList.value = [];
      }
    });

    // 返回响应式数据
    return {
      hotList,
      // TimeFormat
    };
  }
}
</script>

<style scoped>
h1 {
  font-size: 32px;
  padding-bottom: 30px;
  position: relative;
  font-weight: 500;
  text-align: center;
  margin: 30px 0;
  font-family: YunFengFeiYunTi;
}

h1:after {
  position: absolute;
  width: 50px;
  margin-left: -25px;
  height: 2px;
  content: "";
  left: 50%;
  bottom: 0;
  background-color: var(--background-color);
}

.hot {
  max-width: 85vw;
  border-radius: 1%;
  margin: 0 auto;
  background-image: url("@/assets/images/shan.webp");
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.layui-col{
  z-index: 3;
}

.layui-card {
  background-color: var(--6-background-rgba);
  border-radius: 5%;
}

.hot-list-article {
  height: 330px;
  overflow-y: auto; /* 超出时显示滚动条 */
}

.layui-card-body .hot-list-article li {
  display: block;
  line-height: 32px;
  position: relative;
  margin: 3px 0;
  counter-increment: nums;
  padding-left: 30px;
  overflow: hidden;
  word-wrap: normal !important;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.hot-list-article li:before {
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  content: counter(nums, decimal);
  position: absolute;
  left: 0;
  top: 5px;
  border-radius: 100%;
  background-color: #edefee;
  text-shadow: 0 1px 0 var(--5-background-rgba);
  font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, "Courier New", monospace, 'Helvetica Neue', Arial, sans-serif
}

.hot-list-article li:first-child:before, .hot-list-article li:nth-child(2):before, .hot-list-article li:nth-child(3):before {
  color: #fff;
  text-shadow: none
}

.hot-list-article li:first-child:before {
  background-color: #e24d46
}

.hot-list-article li:nth-child(2):before {
  background-color: #2ea7e0
}

.hot-list-article li:nth-child(3):before {
  background-color: #6bc30d
}

.hot-list-article li a:hover {
  text-decoration: underline;
  color: var(--background-color);
}
</style>