var menuIcon = document.querySelector(".menu-icon")

var sidebar = document.querySelector(".sidebar");

const container = document.querySelector(".container")

menuIcon.addEventListener('click', function(){
    sidebar.classList.toggle('small-sidebar');
    
    container.classList.toggle('large-container');
})




