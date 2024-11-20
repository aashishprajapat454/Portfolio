const nav = document.querySelector('nav')
const bar = document.querySelector('.fa-bars').addEventListener("click", function(event){
    nav.classList.add('active')
    event.stopPropagation()
})
    document.querySelector('.fa-xmark').addEventListener('click', function(){
        nav.classList.remove('active')
        // event.stopPropagation()
})
document.addEventListener('click', function(){
    nav.classList.remove('active')
})
nav.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the event from reaching the document
});