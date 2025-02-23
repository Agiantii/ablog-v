<template>
    <div class="project-grid">
        <a v-for="project in projects" :key="project.id" :href="project.html_url" class="project-card" target="_blank">
            <div class="icon-wrapper">
                <span class="emoji">{{ project.emoji }}</span>
            </div>
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
        </a>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
let projects= ref([])
onMounted(async () => {
    const username = 'agiantii';
    const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
    projects.value = data;
    // filter out the forked repos

    projects.value = projects.value.filter(projects => !projects.fork  );
    // randomw emoji
    const emojiLis = ['🚀', '🔧', '👋', '🎉', '🔥', '💡', '🌟', '📦', '🛠️', '⚡', '🌍', '📚', '🖥️', '📈', '🔍', '🎨', '📝', '🔒', '💻', '📊']
    projects.value.forEach(element => {
        element.emoji = emojiLis[Math.floor(Math.random() * emojiLis.length)];
    });
    // sort by updated_at
    projects.value.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    // console.log(projects.value);
});


</script>

<style scoped>
.project-grid {
    display: grid;
    margin: auto;
    min-width: 60vw;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem;
}

.project-card {
    background-color: rgba(30, 30, 30, 0.6);
    border-radius: 8px;
    padding: 1.5rem;
    text-decoration: none;
    transition: transform 0.2s ease, background-color 0.2s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.project-card:hover {
    transform: translateY(-2px);
    background-color: rgba(40, 40, 40, 0.8);
}

.icon-wrapper {
    background-color: rgba(40, 40, 40, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.emoji {
    font-size: 1.2rem;
    line-height: 1;
}

.project-title {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0 0 0.5rem 0;
}

.project-description {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin: 0;
    line-height: 1.5;
}

/* Ensure the component works well on dark backgrounds */
:root {
    color-scheme: dark;
}
@media screen and (max-width: 600px) {
    .project-grid {
        grid-template-columns: 1fr;
    }
}
</style>