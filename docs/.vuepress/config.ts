import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
  title: '马龙伟', // 网站的标题
  description: '马龙伟测试网页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
  base: '/vuepress_v2_learn/',
  head: [['link', { rel: 'icon', href: '/hero.png' }]],// 需要被注入到当前页面的 HTML <head> 中的标签

  theme: defaultTheme({
    logo: '/hero.png',
    // type: 'blog',
    // author: '马龙伟',
    // authorAvatar: '/hero.png',
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
  }),
})
