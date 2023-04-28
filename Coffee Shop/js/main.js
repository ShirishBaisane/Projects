let search = document.querySelector('.search-box');
console.log(search);
console.log(document.querySelector('#search-icon'));
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
}