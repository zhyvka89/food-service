const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export default function saveThemeColor() {
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        bodyRef.classList.add(currentTheme);
    }

    if (currentTheme === Theme.DARK) {
        themeSwitcherRef.checked = true;
        bodyRef.classList.remove(Theme.LIGHT);
    }
}