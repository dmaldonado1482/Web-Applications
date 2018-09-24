let btn = document.querySelector('#btn-hide');
let jumbo = document.querySelector('#jumbo');
btn.onclick = function() {
    if(btn.innerHTML == "Hide Header")
    {
        btn.innerHTML = "Show Header";
        jumbo.style.display = "none";
    }
    else if (btn.innerHTML == "Show Header")
    {
        btn.innerHTML = "Hide Header";
        jumbo.style.display = "";
    }
};

