<!--博客top-->
<template>
  <div class="other-item wow animate__animated animate__zoomIn">
    <h5 class="other-item-title">热门文章</h5>
    <div class="inner">
      <ul class="hot-list-article">
        <li><a href="/Blog/Read/9">SpringBoot 入门爬虫项目实战</a></li>
        <li><a href="/Blog/Read/12">SpringBoot 2.x 教你快速入门</a></li>
        <li><a href="/Blog/Read/13">java学习路线</a></li>
        <li><a href="/Blog/Read/4">基于SpringBoot+JWT+Redis跨域单点登录的实现</a></li>
        <li><a href="/Blog/Read/7">SpringBoot 中如何使用SwaggerAPI接口文档？</a></li>
        <li><a href="/Blog/Read/11">小白轻松入门Redis</a></li>
        <li><a href="/Blog/Read/14">微信一键登录功能的实现</a></li>
        <li><a href="/Blog/Read/8">NPOI导入导出Excel</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.other-item {
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px #146ec273;
  overflow: hidden;
  background-color: var(--7-background-rgba);
  border-radius: 5%;
  z-index: 10;
}

.other-item-title {
  margin: 10px 20px;
  padding: 5px;
  line-height: 30px;
  font-weight: 400;
  border-bottom: 1px solid #e8e9e7;
  position: relative;
  font-size: 18px
}

.other-item .inner {
  margin: 0 20px;
  padding-bottom: 10px
}

.other-item .inner .hot-list-article li {
  display: block;
  line-height: 32px;
  position: relative;
  margin: 3px 0;
  counter-increment: nums;
  padding-left: 30px;
  overflow: hidden;
  word-wrap: normal !important;
  white-space: nowrap;
  text-overflow: ellipsis
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