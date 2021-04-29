import saveThemeColor from './local-storage';

const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitcherRef.addEventListener('change', themeSwitchHandler);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef.classList.add(Theme.LIGHT);

saveThemeColor();

function themeSwitchHandler(e) {
    if (e.currentTarget.checked) {
        changeElementClass(bodyRef, Theme.DARK, Theme.LIGHT);
    } else {
        changeElementClass(bodyRef, Theme.LIGHT, Theme.DARK);
    }
            
    localStorage.setItem('theme', bodyRef.classList);      
}

function changeElementClass(element, firstClass, secondClass) {
    element.classList.add(firstClass);
    element.classList.remove(secondClass);
}
        