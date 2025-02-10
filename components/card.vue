<template>
    <div class="profileCard">
        <div class="icon">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RcdEqWQfZmjzf5xcgb71YY96dWSeOY.png"
                alt="Rocket icon" class="rocket-icon" />
        </div>
        <div class="content">
            <h2 class="title">ablog</h2>
            <p class="description">ablog is a blog system based on vue3,springboot</p>
        </div>
    </div>
</template>

<script setup>
// Component is purely presentational, no script logic needed
</script>

<style scoped>
.profileCard {
    background: linear-gradient(145deg, #1a1a1a, #2a2a2a);
    border-radius: 12px;
    padding: 24px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profileCard:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.icon {
    margin-bottom: 16px;
}

.rocket-icon {
    width: 48px;
    height: 48px;
    object-fit: contain;
}

.content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.title {
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    margin: 0;
}

.description {
    color: #9ca3af;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    opacity: 0.8;
}
</style>