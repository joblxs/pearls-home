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
              <ul class="hot-list-article">
                <li v-for="(i, k) in item.list" :key="k" class="wow animate__animated animate__zoomIn">
                  <a :href="i.link">{{ i.title }}</a>
                </li>
              </ul>
            </template>
            <template v-slot:footer>
              5分钟前更新
            </template>
          </lay-card>
        </lay-col>
      </lay-row>
    </lay-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: [
        {
          title: "知乎",
          list: [
            {title: "知乎1", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎2", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "知乎4", link: "http://biaoti.com", time: "2019-03-04"}
          ]
        },
        {
          title: "百度",
          list: [
            {title: "百度1", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "百度2", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "百度3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "百度4", link: "http://biaoti.com", time: "2019-03-04"}
          ]
        },
        {
          title: "谷歌",
          list: [
            {title: "谷歌1", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "谷歌2", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "谷歌3", link: "http://biaoti.com", time: "2019-03-04"},
            {title: "谷歌4", link: "http://biaoti.com", time: "2019-03-04"}
          ]
        }
      ]
    }
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

.layui-card {
  background-color: var(--4-background-rgba);
  border-radius: 5%;
}

.hot-list-article {
  height: 300px;
  overflow-y: auto; /* 超出时显示滚动条 */
}

.layui-card-body .hot-list-article li {
  z-index: 3;
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