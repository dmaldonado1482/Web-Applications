let btn = document.querySelector('#btn-hide');
let header = document.querySelector('#header');
btn.onclick = function() {
    btn.innerHTML = "Show Header";
    header.style.display = "none";
};

