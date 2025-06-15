<template>
  <!--导航-->
  <NavBlog/>
  <div class="container-fixed">
    <div id="markdown-container" class="col-content"></div>
  </div>
  <!--底部-->
  <BlogFooter/>
</template>

<script>
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown';
import NavBlog from "@/components/blog/module/BlogNav.vue";
import BlogFooter from "@/components/blog/module/BlogFooter.vue";

export default {
  components: {
    BlogFooter, NavBlog
  },
  mounted() {
    document.title = '拾贝歪栈 - 歪码拾贝所，解锁编程反套路秘籍';
    document.querySelector('meta[name="keywords"]').setAttribute('content', '拾贝歪栈, 非标准代码灵感, 程序员斜杠栈, 反套路编程技巧, 代码片段贝壳库, bug彩蛋收集, 小众技术拾贝, 编程脑洞仓库, 开发灵感斜杠集, 技术反常识观察');
    document.querySelector('meta[name="description"]').setAttribute('content', '「拾贝歪栈」的代码贝壳滩，当别人在搜 “如何修复 bug”，我们在研究 “如何让 bug 变成会跳舞的贝壳动画”。这里收集前端骚操作、后端野路子、编程语言冷知识，每段非标准代码都是一颗反套路的光，为你带来全新的编程灵感。');
    this.cherryInstance = new Cherry({
      id: 'markdown-container',
      value: '# 欢迎光临，您有一份「歪贝壳」待签收！\n' +
        '嘿！刚推开「拾贝歪栈」吱呀作响的木门？先别急着找 “正经攻略”—— 在这里，所有 “不合时宜” 的闪光，都能被串成风铃。\n' +
        '\n' +
        '## 什么是「歪贝壳」？\n' +
        '- **它可能是反常识的冷知识**：比如，你知道章鱼的记忆藏在触须里吗？这意味着砍掉它的手……（嘘，留个悬念，等你亲自来栈里挖宝）\n' +
        '- **它或许是生活里的野灵感**：上周在地铁上，看到有人用奶茶杯插花，突然顿悟 —— 原来 “废物” 才是最自由的艺术家。\n' +
        '- **甚至是一段天马行空的胡言乱语**：如果猫统治世界，第一定律大概是 “人类必须跪着开罐头”。\n' +
        '\n' +
        '## 为什么叫「歪栈」？\n' +
        '主流世界像整齐排列的多米诺骨牌，而我们偏要收集那些不小心 “歪倒” 的牌 —— 它们可能打破规则，可能毫无用处，但正是这些 “不标准”，让生活变得有趣。就像你此刻点开这篇文章，或许也是某个 “歪念头” 作祟？\n' +
        '\n' +
        '## 在这里，你能捡到什么？\n' +
        '✅ **【贝壳解剖室】**：用脱口秀的方式拆解硬核知识，保证比老板的 PPT 有趣 100 倍\n' +
        '✅ **【栈房日记】**：记录打工人的反卷日常，比如今天用摸鱼时间，把 Excel 表格做成了像素画\n' +
        '✅ **【歪理实验室】**：严肃讨论 “为什么熬夜是当代人的行为艺术”“如何用玄学修复 WiFi 信号”\n' +
        '\n' +
        '## 最后，一个「歪」邀请\n' +
        '你的口袋里，是不是也藏着几颗没人懂的贝壳？无论是深夜 emo 时写的歪诗，还是对甲方需求的吐槽，都欢迎扔进栈里的 “贝壳信箱”（评论区就是你的投稿箱）。被选中的 “歪贝”，不仅会被收录进栈内珍藏，还有机会兑换栈主亲手画的沙雕周边！\n' +
        '\n' +
        '> 栈主说：“这个世界不缺标准答案，但缺敢把答案画成歪歪扭扭涂鸦的人。” 所以，准备好和我们一起，在歪路上拾光了吗？',
      engine: {
        syntax: {
          header: {
            anchorStyle: 'none', // 标题前有自增序号锚点
          },
        },
      },
      editor: {
        // 纯预览模式
        defaultModel: 'previewOnly'
      },
      toolbars: {
        toc: {
          updateLocationHash: false, // 要不要更新URL的hash
          defaultModel: 'full', // pure: 精简模式/缩略模式，只有一排小点； full: 完整模式，会展示所有标题
          showAutoNumber: false, // 是否显示自增序号
          position: 'fixed', // 悬浮目录的悬浮方式。当滚动条在cherry内部时，用absolute；当滚动条在cherry外部时，用fixed
          cssText: '', // 自定义样式
        },
      }
    })
    this.handleClick = this.handleClick.bind(this);
    document.addEventListener('click', this.handleClick);
  },
  beforeUnmount() {
    // 在组件销毁前移除事件监听器
    document.removeEventListener('click', this.handleClick);
  },
  methods: {
    handleClick(event) {
      if (event.target.tagName === 'A' && event.target.getAttribute('data-id')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('data-id').replace(/^#/, ""); // 获取锚点的目标ID
        const targetElement = document.querySelector(`[id="${targetId}"]`); // 查找目标元素
        if (targetElement) {
          // 计算目标元素的顶部位置
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - 90; // 减去90px
          // 平滑滚动到目标位置
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // 平滑滚动
          });
        }
      }
    }
  }
}
</script>

<style scoped>
.container-fixed {
  max-width: 1200px;
  width: 99%;
  margin-left: auto;
  margin-right: auto;
}

.col-content {
  position: relative;
  margin-top: 60px;
  z-index: 10;
}

@media screen and (max-width: 1366px) {
  .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 1024px) {
  .col-content {
    width: 100%;
  }

  .container-fixed {
    width: 90%
  }
}

@media screen and (max-width: 500px) {
  .col-content {
    padding: 0 0
  }
}
</style>