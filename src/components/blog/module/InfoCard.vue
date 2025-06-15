<!--个人卡片-->
<template>
  <div class="card wow animate__animated animate__zoomIn">
    <div class="section">
      <div class="pic">
        <img src="@/assets/images/head-portrait.jpg" alt="图片加载错误！">
      </div>
      <div class="name">拾贝歪栈</div>
    </div>

    <div class="bottom-section">
      <div class="social-media">
        <a href="javascript:void(0)"><lay-icon type="layui-icon-github"></lay-icon></a>
        <a href="javascript:void(0)"><lay-icon type="layui-icon-login-qq"></lay-icon></a>
        <!--                <a href="#"><lay-icon type="layui-icon-release"></lay-icon></a>-->
      </div>
      <div>1<span>文章</span></div>
      <div class="border"></div>
      <div>0<span>标签</span></div>
      <div class="border"></div>
      <div>0<span>分类</span></div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 0 10px #146ec273;
  border-radius: 5%;
  z-index: 10;
}

.section {
  padding: 30px 10px 45px 10px;
  background: var(--9-background-rgba);
}

.pic {
  position: relative;
  width: 85px;
  height: 85px;
  margin: auto auto 20px auto;
  padding: 4px;
  border: 2px solid #6a89cc;
  border-radius: 50%;
}

.pic img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.pic::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid #3c6382;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
  animation: animate 1.5s linear infinite;
}

@keyframes animate {
  to {
    transform: scale(1.5);
    opacity: 0;
  }
}

.name {
  font-family: YunFengFeiYunTi;
  color: var(--font-color);
  font-size: 40px;
  letter-spacing: 2px;
  text-transform: inherit;
}

.bottom-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--4-background-rgba);
  padding: 55px 40px;
  font-size: 20px;
  text-transform: inherit;
  color: var(--font-color);
}

.border {
  width: 1px;
  height: 20px;
  background: #000;
  margin: 0 24px;
}

.bottom-section span {
  font-size: 14px;
  display: block;
}

.social-media {
  position: absolute;
  width: 100%;
  top: -25px;
  left: 0;
  z-index: 1;
}

.social-media i {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  background: #2980b9;
  border-radius: 50%;
  color: #f1f1f1;
  font-size: 24px;
  line-height: 40px !important;
  margin: 0 10px;
}

.social-media i::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  border: 1px solid #e74c3c;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 50%;
  z-index: -1;
  transform: scale(.9);
  transition: .4s linear;
}

.social-media i:hover::after {
  transform: scale(1.5);
  opacity: 0;
}

</style>