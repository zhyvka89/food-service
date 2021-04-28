const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitcherRef.addEventListener('change', themeSwitchHandler);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

saveThemeColor();

function themeSwitchHandler(e) {
    if (e.currentTarget.checked) {
                bodyRef.classList.add(Theme.DARK);
                bodyRef.classList.remove(Theme.LIGHT);
                // localStorage.setItem('theme', Theme.DARK);
    } else {
                bodyRef.classList.remove(Theme.DARK);
                bodyRef.classList.add(Theme.LIGHT);
                // localStorage.setItem('theme', Theme.LIGHT);
    }
            
    localStorage.setItem('theme', bodyRef.classList);
            
}
        
function saveThemeColor() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        bodyRef.classList.add(currentTheme);
    }

    if (currentTheme === Theme.DARK) {
        themeSwitcherRef.checked = true;
    }
}