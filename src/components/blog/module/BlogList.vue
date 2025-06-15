<!--博客列表-->
<template>
  <lay-container fluid>
    <lay-row space="30">
      <lay-col v-for="(blog, index) in blogItems" :key="index" md="12" sm="12" xs="24">
        <div class="article-item wow animate__animated animate__zoomIn">
<!--          <div class="fc-flag">置顶</div>-->
          <router-link :to="blog.link" class="recent-post-summary">
            <div class="summary">{{ blog.summary }}</div>
          </router-link>
          <div class="recent-post-title">
            <router-link :to="blog.link" class="title">
              {{ blog.title }}
            </router-link>
          </div>
          <div class="recent-post-info">
            <span class="post-meta-date">
              <lay-icon type="layui-icon-release" style="color: #0aafe6;font-size: 12px"></lay-icon>
              <span> 发表于 </span><time :datetime="blog.date" style="display: inline;"><TimeFormat :date="blog.date" /></time>
              <span> | </span>
              <lay-icon type="layui-icon-refresh" style="color: #0aafe6;font-size: 12px"></lay-icon>
              <span> 更新于 </span><time :datetime="blog.date" style="display: inline;"><TimeFormat :date="blog.date" /></time>
            </span>
            <span>
              <span> | </span>
              <lay-icon type="layui-icon-component" style="color: #0aafe6;font-size: 12px"></lay-icon>
              <span> 博客 </span>
            </span>
            <span>
              <span> | </span>
              <lay-icon type="layui-icon-note" style="color: #0aafe6;font-size: 12px"></lay-icon>
              <span> 第一篇 </span>
              <span> • </span>
              <span> 介绍 </span>
            </span>
            <span>
              <span> | </span>
              <lay-icon type="layui-icon-read" style="color: #0aafe6;font-size: 12px"></lay-icon>
              <span> 阅读量: 5 </span>
            </span>
          </div>
        </div>
      </lay-col>
    </lay-row>
  </lay-container>
</template>

<script>
import TimeFormat from '@/utils/TimeFormat.vue';
export default {
  components: {
    TimeFormat
  },
  data() {
    return {
      blogItems: [
        {
          title: '欢迎光临，您有一份「歪贝壳」待签收！',
          date: '2025-06-14 20:05:08',
          summary: '嘿！刚推开「拾贝歪栈」吱呀作响的木门？先别急着找 “正经攻略”—— 在这里，所有 “不合时宜” 的闪光，都能被串成风铃。',
          link: '/posts/1',
          images: '@/assets/images/xkbg.png'
        }
      ]
    };
  },
}
</script>

<style scoped>
.article-item {
  overflow: hidden;
  position: relative;
  border-radius: 5%;
  background: var(--5-background-rgba);
  transition: box-shadow 0.3s ease-in-out;
  z-index: 10;
}

.article-item:hover {
  box-shadow: 0 10px 16px 0 rgba(0, 0, 0, 0.8);
}

.article-item .fc-flag {
  position: absolute;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 74px;
  background-color: #ff5722;
  transform: rotate(-45deg);
  left: -18px;
  top: 9px;
  z-index: 1;
}

.article-item .recent-post-summary {
  height: 180px;
  width: 100%;
  background: var(--7-background-rgba);
  clip-path: polygon(0 120px, 0 0, 100% 0, 100% 120px, 50% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.article-item .recent-post-summary:hover {
  color: var(--background-color);
  animation-name: scaleUp;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  transform-origin: center;
}

@keyframes scaleUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

.article-item .recent-post-summary .summary {
  font-size: 15px;
  line-height: 25px;
  margin: 0 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.article-item .recent-post-title {
  width: 100%;
  margin-top: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 15px;
  padding: 0 25px;
}

.article-item .recent-post-title .title:hover {
  color: var(--background-color);
}

.article-item .recent-post-info {
  margin-top: 20px;
  height: 100px;
  width: 100%;
  padding: 0 25px 5px 25px;
  line-height: 25px;
  font-size: 12px;
  color: #858585;
}

@media screen and (max-width: 500px) {
  .layui-fluid {
    padding: 0;
  }

  .article-item .title {
    padding-right: 0
  }

  .article-item .content .cover {
    width: 100%;
    height: auto;
    float: none;
    margin-bottom: 10px
  }
}
</style>