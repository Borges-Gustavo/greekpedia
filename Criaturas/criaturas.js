document.addEventListener('DOMContentLoaded', function() {
    loadSettings();
    setupEventListeners();
});

function loadSettings() {
    // Load dark mode preference
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-btn').classList.add('active');
        document.getElementById('light-mode-btn').classList.remove('active');
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('light-mode-btn').classList.add('active');
        document.getElementById('dark-mode-btn').classList.remove('active');
    }

    // alterador de fonte
    const fontSize = localStorage.getItem('fontSize') || 'medium';
    applyFontSize(fontSize);
}

function setupEventListeners() {
    // botao do modo claro
    document.getElementById('light-mode-btn').addEventListener('click', function() {
        document.body.classList.remove('dark-mode');
        document.getElementById('dark-mode-btn').classList.remove('active');
        this.classList.add('active');
        localStorage.setItem('darkMode', 'false');
    });

    // botao do modo escuro
    document.getElementById('dark-mode-btn').addEventListener('click', function() {
        document.body.classList.add('dark-mode');
        document.getElementById('light-mode-btn').classList.remove('active');
        this.classList.add('active');
        localStorage.setItem('darkMode', 'true');
    });

    // Font size buttons
    document.getElementById('small-font-btn').addEventListener('click', function() {
        applyFontSize('small');
    });

    document.getElementById('medium-font-btn').addEventListener('click', function() {
        applyFontSize('medium');
    });

    document.getElementById('large-font-btn').addEventListener('click', function() {
        applyFontSize('large');
    });
}

function applyFontSize(size) {
    // Remove all font size classes
    document.body.classList.remove('font-small', 'font-medium', 'font-large');

    // Add the selected font size class
    document.body.classList.add('font-' + size);

    // Update button states
    document.getElementById('small-font-btn').classList.remove('active');
    document.getElementById('medium-font-btn').classList.remove('active');
    document.getElementById('large-font-btn').classList.remove('active');

    if (size === 'small') {
        document.getElementById('small-font-btn').classList.add('active');
    } else if (size === 'medium') {
        document.getElementById('medium-font-btn').classList.add('active');
    } else if (size === 'large') {
        document.getElementById('large-font-btn').classList.add('active');
    }

    // Save preference
    localStorage.setItem('fontSize', size);
}
