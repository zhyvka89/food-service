const themeSwitcherRef = document.querySelector('#theme-switch-toggle');

themeSwitcherRef.addEventListener('change', themeSwitcherHandler);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function themeSwitcherHandler(e) {
    const bodyRef = document.querySelector('body');
    if (e.currentTarget.checked) {
        bodyRef.classList.add(Theme.DARK);
        bodyRef.classList.remove(Theme.LIGHT);
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
    }
        
}