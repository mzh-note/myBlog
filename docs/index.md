---
layout: home
layoutClass: 'm-home-layout'

hero:
  #  name: 随缘日记
  #  text:
  #  tagline: 前端码农，记录学习工作中踩过的坑坑洼洼
  #  image:
  #    src: /author.jpg
  #    alt: 随缘日记
  actions:
    - text: 首页
      link: https://mazhanghua.com
    - text: 导航
      link: /nav/
      theme: alt
    #    - text: mmPlayer
    #      link: https://netease-music.fe-mm.com
    - text: 作品案例
      link: /preview/index
      theme: alt
features:
  - icon:
      src: assets/icon/yuque.svg
    title: 技术随笔
    details: 记录用过的前端技术教程<br />如有异议按你的理解为主，不接受反驳
    link: https://www.yuque.com/mzh-note
    linkText: 我的语雀
  - icon: 📘
    title: 网易云音乐API
    details: 自己搭建的网易云音乐API<br />仅作个人应用开发用途，不作商用，不推荐
    link: https://api.mazhanghua.com/docs/#/
    linkText: API文档
  - icon: 💡
    title: 现代 JavaScript 教程
    details: 以最新的 JavaScript 标准为基准<br />子曰：温故而知新，可以为师矣
    link: https://zh.javascript.info/
    linkText: js教程
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我踩过的坑<br />总有一些让你意想不到的问题
    link: https://www.yuque.com/mzh-note/web
    linkText: 踩坑记录
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必<b class="red">先</b>利其器<br /><b class="red">翻</b>过那堵<b class="red">墙</b>，各种应用应有尽有
    #    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: https://chromewebstore.google.com/?utm_source=ext_app_menu
    linkText: 提效工具
  - icon: 💯
    title: 因上努力，果上随缘
    details: 不积跬步，无以至千里；不积小流，无以成江海<small class="bottom-small">想躺平很久了</small>
    link: /about/index
---

<style>
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}
.m-home-layout .details .red{
  color: #f22;
}
.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
