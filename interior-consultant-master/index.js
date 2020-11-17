const openMenu = document.getElementById('menu');
openMenu.addEventListener('click', openNav);

const closeMenu = document.getElementById('close');
closeMenu.addEventListener('click', closeNav);

function openNav() {
    document.getElementById('nav').style.width = '100%';
}

function closeNav() {
    document.getElementById('nav').style.width = '0%';
}