---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "agiantii-blog"
  # text: "agiantii'home"
  # tagline: 
  # image: /1.jpg
  actions:
    - theme: brand
      text: project
      link: /project
    - theme: alter
      text: about me 🗯️
      link: /about
    - theme: alter
      text: tool 🔧
      link: /tool
    - theme: alter
      text: template 🔧
      link: /post/template
---

<script setup>
import timeline from '../components/timeline.vue';
</script>

<timeline></timeline>

