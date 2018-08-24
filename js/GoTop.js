let arrow = document.getElementById("arrow-top");

window.onscroll = function() {
    scrollPage();
};

function scrollPage() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrow.style.display = "block";
    }else {
        arrow.style.display = "none";
    }
};

arrow.onclick = function topPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    topPage();
};

 

