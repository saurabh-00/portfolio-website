const themeDots = document.getElementsByClassName('theme-dot');
const themeStyle = document.getElementById('theme-style');
const theme = localStorage.getItem('theme');

function setTheme(mode) {
    if (mode == 'light') {
        themeStyle.href = 'index.css'
    }
    if (mode == 'blue') {
        themeStyle.href = 'blue.css'
    }
    if (mode == 'green') {
        themeStyle.href = 'green.css'
    }
    if (mode == 'purple') {
        themeStyle.href = 'purple.css'
    }
    localStorage.setItem('theme', mode);
}

if (!theme) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (let i = 0; i < themeDots.length; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

