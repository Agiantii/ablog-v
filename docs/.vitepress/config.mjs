import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
import guideAuto from '../../util/guide_auto'
import { withMermaid } from "vitepress-plugin-mermaid";
import { RssPlugin} from 'vitepress-plugin-rss'
const baseUrl = 'http://blog.agiantii.top'
// const baseUrl = 'http://localhost/5173'
const RSS = {
  title: 'agiantii',
  baseUrl,
  copyright: 'Copyright (c) 2025-present, agiantii',
}
const config = defineConfig({
  
  transformHead({ assets }) {
    // 相应地调整正则表达式以匹配字体
    const myFontFile = assets.find(file => /font-name\.\w+\.woff2/)
    if (myFontFile) {
      return [
        [
          'link',
          {
            rel: 'preload',
            href: myFontFile,
            as: 'font',
            type: 'font/woff2',
            crossorigin: ''
          }
        ]
      ]
    }}
  ,
  vite: {
    // ↓↓↓↓↓
    plugins: [RssPlugin(RSS)]
    // ↑↑↑↑↑
  },
  lang: 'zh',
  title: "课程设计",
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
      message: 'Powered by VitePress ❤️ | <a href="https://beian.miit.gov.cn">浙ICP备2024099488号-2</a>',
    
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