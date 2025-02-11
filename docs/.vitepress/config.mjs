import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
import guideAuto from '../../util/guide_auto'
import { withMermaid } from "vitepress-plugin-mermaid";
import { RssPlugin} from 'vitepress-plugin-rss'
const baseUrl = 'http://agiantii.fun'
// const baseUrl = 'http://localhost/5173'
const RSS = {
  title: 'agiantii',
  baseUrl,
  copyright: 'Copyright (c) 2025-present, agiantii',
}
const config = defineConfig({
  vite: {
    // ↓↓↓↓↓
    plugins: [RssPlugin(RSS)]
    // ↑↑↑↑↑
  },
  lang: 'zh',
  title: "agiantii-blog",
  description: "agiantii'home",
  lastUpdated: true,
  head:[
    ['link', { rel: 'icon', href: './ico/book.ico' }],
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
        dateStyle: 'short',
        timeStyle: 'medium',
      }
    },
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/agiantii' },
      { icon: 'zhihu', link: 'https://www.zhihu.com/people/giantii' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3493076020497023' },
      {icon:'qq', link:'mailto:3234678638@qq.com'}
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
const meraidConfig = withMermaid(config)
export default meraidConfig