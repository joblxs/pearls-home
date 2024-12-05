<template>
  <h1 class="wow animate__animated animate__zoomIn">热榜</h1>
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
            <template v-slot:footer>
              <time :datetime="item.updateTime" :title="item.updateTime" style="display: inline;">更新于{{ item.formatPast }}</time>
            </template>
          </lay-card>
        </lay-col>
      </lay-row>
    </lay-container>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    // 使用ref创建响应式数据
    const hotList = ref([]);

    // 定义一个函数来获取单个平台的热榜数据
    const fetchHotList = async (title) => {
      try {
        const response = await axios.get(`https://api.pearktrue.cn/api/dailyhot/?title=${encodeURIComponent(title)}`);
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
        console.log('1111', results)
        // 将结果存储到 hotList 中
        hotList.value = results
          .filter(result => result.status === 'fulfilled') // 只保留成功的请求
          .map((result, index) => ({
            title: platforms[index], // 使用平台名称作为标题
            updateTime: result.value.updateTime, // 从 API 获取的更新时间
            formatPast: formatPast(result.value.updateTime), // 格式化从 API 获取的更新时间
            list: result.value.data // 从 API 获取的数据列表
          }));
      } catch (error) {
        console.error('请求热榜数据出错：', error);
        hotList.value = [];
      }
    });

    const formatPast = (date, type = "default", zeroFillFlag = true) => {
      // 定义countTime变量，用于存储计算后的数据
      let countTime;
      // 获取当前时间戳
      let time = new Date().getTime();
      // 转换传入参数为时间戳
      let afferentTime = new Date(date).getTime();
      // 当前时间戳 - 传入时间戳
      time = Number.parseInt(`${time - afferentTime}`);
      let typeList = ['default', '-', '/', '.', '年月日', '月日', '年']
      if (time < 0 || (typeof time === 'number' && isNaN(time)) || !date) {
        // 时间参数存在问题 此处alert仅做错误示例，实际应用以场景需求为准
        return alert("请查看时间参数是否满足规则:\n1、时间参数为必填参数且为过去时间 \n2、时间参数不合法(参考date参数规则)");
      } else if ((zeroFillFlag && typeof zeroFillFlag !== 'boolean') || (type && !typeList.includes(type))) {
        // 补零参数或格式参数存在问题 此处alert仅做错误示例，实际应用以场景需求为准
        return alert("请查看补零参数/格式参数是否满足规则：\n1、补零参数为布尔值类型 \n2、格式参数不合法(参考type参数规则)");
      } else if (time < 10000) {
        // 10秒内
        return "刚刚";
      } else if (time < 60000) {
        // 超过10秒少于1分钟内
        countTime = Math.floor(time / 1000);
        return `${countTime}秒前`;
      } else if (time < 3600000) {
        // 超过1分钟少于1小时
        countTime = Math.floor(time / 60000);
        return `${countTime}分钟前`;
      } else if (time < 86400000) {
        // 超过1小时少于24小时
        countTime = Math.floor(time / 3600000);
        return `${countTime}小时前`;
      } else if (time >= 86400000 && type == "default") {
        // 超过二十四小时（一天）且格式参数为默认"default"
        countTime = Math.floor(time / 86400000);
        //大于等于365天
        if (countTime >= 365) {
          return `${Math.floor(countTime / 365)}年前`;
        }
        //大于等于30天
        if (countTime >= 30) {
          return `${Math.floor(countTime / 30)}个月前`;
        }
        return `${countTime}天前`;
      } else {
        // 一天（24小时）以上且格式不为"default"则按传入格式参数显示不同格式
        // 数字补零
        let Y = new Date(date).getFullYear();
        let M = new Date(date).getMonth() + 1;
        let zeroFillM = M > 9 ? M : "0" + M;
        let D = new Date(date).getDate();
        let zeroFillD = D > 9 ? D : "0" + D;
        // 传入格式为"-" "/" "."
        if (type == "-" || type == "/" || type == ".") {
          return zeroFillFlag
            ? Y + type + zeroFillM + type + zeroFillD
            : Y + type + M + type + D;
        }
        // 传入格式为"年月日"
        if (type == "年月日") {
          return zeroFillFlag
            ? Y + type[0] + zeroFillM + type[1] + zeroFillD + type[2]
            : Y + type[0] + M + type[1] + D + type[2];
        }
        // 传入格式为"月日"
        if (type == "月日") {
          return zeroFillFlag
            ? zeroFillM + type[0] + zeroFillD + type[1]
            : M + type[0] + D + type[1]
        }
        // 传入格式为"年"
        if (type == "年") {
          return Y + type
        }

      }
    };

    // 返回响应式数据
    return {
      hotList
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
  max-width: 90vw;
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
  height: 300px;
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
  color: #6bc30d
}
</style>