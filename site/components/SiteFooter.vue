<template>
    <footer class="site-footer">
        <div class="wrapper">
            <div class="footer-info">            
                <span>Built by <a href="https://wearebold.co.uk"
                        rel="noopener noreferrer">wearebold</a></span>
            </div>
            <ul class="footer-links">
                <li class="link-item">
                    <small>&copy; {{ new Date().getFullYear() }} UPS Direct</small>
                </li>
            </ul>
        </div>
    </footer>
</template>
<style scoped>
.site-footer {
    @apply bg-white px-4 py-12 border-t border-slate-100;
}

.site-footer>.wrapper {
    @apply flex flex-wrap gap-16 justify-between m-auto max-w-6xl;
}
</style>