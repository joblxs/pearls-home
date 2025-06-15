<template>
  <!--导航-->
  <NavBlog/>
  <!--内容-->
  <div class="container-fixed" style="margin-top: 90px">
    <!--博客列表-->
    <div class="col-content">
      <ListBlog/>
    </div>
    <!--右侧小组件-->
    <div class="col-other">
      <!--信息卡片-->
      <InfoCard/>
      <!--热门博客-->
      <HotBlog/>
    </div>
    <div style="clear: both"></div>
  </div>

  <!--底部-->
  <BlogFooter/>
</template>

<script>
import NavBlog from "@/components/blog/module/BlogNav.vue";
import ListBlog from "@/components/blog/module/BlogList.vue";
import BlogFooter from "@/components/blog/module/BlogFooter.vue";
import InfoCard from "@/components/blog/module/InfoCard.vue";
import HotBlog from "@/components/blog/module/BlogHot.vue";

export default {
  components: {
    NavBlog, ListBlog, BlogFooter, InfoCard, HotBlog
  },
  mounted() {
    document.title = '拾贝歪栈 - 歪码拾贝所，解锁编程反套路秘籍';
    document.querySelector('meta[name="keywords"]').setAttribute('content', '拾贝歪栈, 非标准代码灵感, 程序员斜杠栈, 反套路编程技巧, 代码片段贝壳库, bug彩蛋收集, 小众技术拾贝, 编程脑洞仓库, 开发灵感斜杠集, 技术反常识观察');
    document.querySelector('meta[name="description"]').setAttribute('content', '「拾贝歪栈」的代码贝壳滩，当别人在搜 “如何修复 bug”，我们在研究 “如何让 bug 变成会跳舞的贝壳动画”。这里收集前端骚操作、后端野路子、编程语言冷知识，每段非标准代码都是一颗反套路的光，为你带来全新的编程灵感。');  }
}
</script>

<style scoped>
.container-fixed {
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.col-content {
  float: left;
  width: calc(100% - 300px - 20px);
}

.col-other {
  float: right;
  width: 300px
}

@media screen and (max-width: 1366px) {
  .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 1024px) {
  .col-content, .col-other {
    width: 100%;
    float: none
  }

  .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 500px) {
  .col-content, .col-other {
    padding: 0 0
  }
}
</style>