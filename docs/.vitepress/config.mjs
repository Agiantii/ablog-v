import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
import guideAuto from '../../util/guide_auto'

const config = defineConfig({
  lang: 'zh',
  title: "agiantii-blog",
  description: "agiantii'home",
  lastUpdated: true,
  head:[
    ['link', { rel: 'icon', href: './pinia.svg' }],
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'project', link: '/project' },
      { text: 'about', link: '/about' },
      ...guideAuto.nav
    ],
    sidebar: guideAuto.sidebar,
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/agiantii' },
      { icon: 'zhihu', link: 'https://www.zhihu.com/people/giantii' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3493076020497023' }
    ],
    footer: {
      message: 'Powered by VitePress ❤️',
    },
    logo: '/logo.svg', 
    outline: {
      level:[1,6]
    }
  },
  markdown: {
    lineNumbers: true,
    math: true,
  },
  outDir: '../dist'
})

export default config