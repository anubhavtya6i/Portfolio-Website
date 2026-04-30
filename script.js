document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference in local storage
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = '☀️';
        themeToggleBtn.setAttribute('aria-label', 'Toggle Light Mode');
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update button icon and aria-label
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.textContent = '☀️';
            themeToggleBtn.setAttribute('aria-label', 'Toggle Light Mode');
        } else {
            localStorage.setItem('theme', 'light');
            themeToggleBtn.textContent = '🌙';
            themeToggleBtn.setAttribute('aria-label', 'Toggle Dark Mode');
        }
    });
});