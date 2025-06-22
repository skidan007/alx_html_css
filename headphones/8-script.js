const navListItems = document.querySelectorAll('.navbar__list-item');
const navbarList = document.querySelector('.navbar__list');
const toggleBtn = document.querySelector('.navbar__toggler');
let height = navbarList.getBoundingClientRect().height;
navListItems.forEach((navList) => {
    navList.addEventListener('click', () => {
        navListItems.forEach((listItem) => {
            listItem.classList.remove('active');
        });
        navList.classList.add('active');
    });
});

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navbarList.classList.toggle('active');
});
