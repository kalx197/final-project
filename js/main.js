document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. LocalStorage usage: Check for user preference on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
    }

    // 2. Event Handling: Toggle logic
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        // 3. Dynamic content update
        let currentTheme = 'light';
        if (body.classList.contains('dark-theme')) {
            currentTheme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }

        // 4. Persistence: Save selection
        localStorage.setItem('theme', currentTheme);
    });
});
