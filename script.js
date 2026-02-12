// Récupérer le bouton du toggle
const themeToggle = document.querySelector('.theme-toggle');

// Récupérer l'icône à l'intérieur
const themeIcon = themeToggle.querySelector('i');

// Vérifier si l'utilisateur avait déjà un thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-mode', savedTheme === 'dark');

// Mettre à jour l'icône au chargement
updateIcon();

// Ajouter un événement au clic
themeToggle.addEventListener('click', () => {
    // Basculer la classe dark-mode sur le body
    document.body.classList.toggle('dark-mode');
    
    // Déterminer le thème actuel
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Sauvegarder la préférence
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Mettre à jour l'icône
    updateIcon();
});

// Fonction pour mettre à jour l'icône
function updateIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeIcon.className = isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}
