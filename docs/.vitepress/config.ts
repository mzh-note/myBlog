import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '缘的客栈',
  description: 'Mr.Ma的客栈，记录前端常用知识、常用框架使用教程、开发调试技巧、其他各种bug等',
  head,

  lastUpdated: false,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/mzh-note' }],

    footer: {
      message: `
        <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2023029475号</a>
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003958" target="_blank">
            <img style="display: inline; width: 15px; height: 15px;" src="/gongan.png"/>粤公网安备44011302003958号
        </a>`,
      copyright: `Copyright&copy;${new Date().getFullYear()}&nbsp;<a href="https://www.mazhanghua.com" target="_blank">www.mazhanghua.com</a>`,
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    /* 访客统计 */
    // visitor: {
    //   /** 统计 id（单独页面的统计会作为前缀使用）*/
    //   badgeId: 'vitepress-nav-template',
    // },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
