// const word = document.querySelector('.word')
// const overlayDiv = document.querySelector('.overlay')
// const svgIcon = document.querySelector('.svg-icon')
// console.log(word)
// console.log(overlayDiv)
// const show = function (e) {
//     overlayDiv.style.backgroundColor = '#33333396';
//     svgIcon.style.opacity = 0;
// };
// word.addEventListener('mouseover', show.bind(this));
// // word.removeEventListener('mouseover', show());
// const sidebar = document.querySelector('.sidebar')
// document.querySelector('.try').addEventListener('click', function () {
//     sidebar.classList.remove('sidebar')
//     sidebar.classList.add('sidebarv')
// })

document.querySelector('.try').addEventListener('click', function () {
    document.getElementById("sidenav").style.width = "100%";
    document.querySelector('.black-menu').style.width = "25%"
    document.querySelector('.black-menu').style.opacity = "1"


});

document.querySelector('.closebtn').addEventListener('click', function () {
    document.getElementById("sidenav").style.width = "0";
    document.querySelector('.black-menu').style.opacity = "0"
    document.querySelector('.black-menu').style.width = "0"

});