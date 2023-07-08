import { defineUserConfig } from 'vuepress'
import { hopeTheme } from "vuepress-theme-hope";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  title: '马龙伟', // 网站的标题
  description: '马龙伟测试网页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  base: '/vuepress_v2_learn/',
  head: [['link', { rel: 'icon', href: '/hero.png' }]],// 需要被注入到当前页面的 HTML <head> 中的标签

  theme: hopeTheme({
    logo: '/hero.png',
    // type: 'blog',
    // author: '马龙伟',
    // authorAvatar: '/hero.png',
    repo: 'https://github.com/loogg/vuepress_v2_learn',
    docsBranch: 'master',
    docsDir: 'docs',
    navbar: [
      {
        text: 'Home',
        link: '/',
        // icon: 'reco-home'
      },
      // 对应blog/fontend/README.md
      {
        text: '前端',
        link: '/blog/fontend/'
      },
      {
        text: '后端',
        link: '/blog/backend/'
      },
      // 对应/guide/guide.md
      {
        text: '导航',
        link: '/guide/guide',
        // icon: 'reco-menu'
      },
    ],

    // sidebar: 'auto',

    sidebar: {
      '/blog/fontend/': [
        {
          text: '前端',
          collapsible: true,
          children: ['', 'myhtml', {
            text: 'js自定义的标题',
            link: 'myJavascript'
          }],
        },
      ],
      '/blog/backend/': [
        {
          text: '后端',
          children: ['', 'myjava'],
        },
      ],
    },

  }),

  plugins: [
    searchPlugin({
      // 配置项
      maxSuggestions: 10
    }),
  ],
})
