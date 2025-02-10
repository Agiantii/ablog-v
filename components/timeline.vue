<template>
    <div class="timeline-container">
        <div class="timeline">
            <div v-for="(item, index) in timelineItems" :key="index" class="timeline-item"
                :class="{ 'from-left': index % 2 === 0, 'from-right': index % 2 === 1 }">
                <div class="timeline-content">
                    <span class="date">{{ item.date }}</span>
                    <h3 class="title">{{ item.title }}</h3>
                    <p class="description">{{ item.description }}</p>
                    <div v-if="item.tags" class="tags">
                        <span v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="tag">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const timelineItems = ref([
    {
        date: '2024 Feb',
        title: 'Project Kickoff',
        description: 'Successfully launched our new platform with enhanced features and improved user experience.',
        tags: ['Kickoff', 'Milestone']
    },
    {
        date: '2024 Jan',
        title: 'Beta Testing',
        description: 'Conducted extensive Beta testing with selected users to gather valuable feedback.',
        tags: ['Testing', 'Development']
    },
    {
        date: '2023 Dec',
        title: 'Design Phase',
        description: 'Completed the initial design phase, including user interface and experience planning.',
        tags: ['Design', 'UI/UX']
    },
    {
        date: '2023 Nov',
        title: 'Planning',
        description: 'Finished the initial project planning and requirements gathering phase.',
        tags: ['Planning', 'Strategy']
    }
])
</script>

<style scoped>
:root {
    --primary-color: #8B5CF6;
    --primary-light: #A78BFA;
    --primary-dark: #6D28D9;
    --background-color: #1F2937;
    --card-background: #F3F4F6;
    --text-primary: #F9FAFB;
    --text-secondary: #D1D5DB;
    --text-dark: #374151;
}

body {
    background-color: var(--background-color);
    color: var(--text-primary);
}

.timeline-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.timeline {
    position: relative;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom,
            transparent,
            var(--primary-light) 10%,
            var(--primary-color) 50%,
            var(--primary-dark) 90%,
            transparent);
    box-shadow: 0 0 15px var(--primary-color);
}

.timeline-item {
    position: relative;
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 4px solid var(--background-color);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3), 0 0 10px var(--primary-color);
    z-index: 1;
}

.timeline-content {
    position: relative;
    width: calc(50% - 3rem);
    padding: 1.5rem;
    background: var(--card-background);
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.timeline-content:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.from-left .timeline-content {
    margin-right: auto;
}

.from-right .timeline-content {
    margin-left: auto;
}

.from-left .timeline-content::after,
.from-right .timeline-content::after {
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border: 10px solid transparent;
}

.from-left .timeline-content::after {
    right: -20px;
    border-left-color: var(--card-background);
}

.from-right .timeline-content::after {
    left: -20px;
    border-right-color: var(--card-background);
}

.date {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background-color: var(--primary-color);
    color: var(--text-primary);
    border-radius: 16px;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
}

.title {
    color: var(--text-dark);
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0.5rem 0;
}

.description {
    color: var(--text-dark);
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
}

.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tag {
    padding: 0.25rem 0.75rem;
    background-color: var(--primary-light);
    color: var(--text-primary);
    border-radius: 16px;
    font-size: 0.875rem;
}

@media (max-width: 768px) {
    .timeline::before {
        left: 1rem;
    }

    .timeline-item::before {
        left: 1rem;
    }

    .timeline-content {
        width: calc(100% - 3rem);
        margin-left: 3rem !important;
    }

    .from-left .timeline-content::after,
    .from-right .timeline-content::after {
        left: -20px;
        border-right-color: var(--card-background);
        border-left-color: transparent;
    }
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.from-left .timeline-content {
    animation: slideInLeft 0.5s ease-out;
}

.from-right .timeline-content {
    animation: slideInRight 0.5s ease-out;
}
</style>