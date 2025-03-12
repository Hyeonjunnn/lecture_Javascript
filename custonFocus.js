let buttons = document.getElementsByTagName('button');

for (const button of buttons) {
    button.addEventListener('click', () => {
        document.getElementById('focus').focus();
    });
}