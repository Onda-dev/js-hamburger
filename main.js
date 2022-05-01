const hamburgerMenuOpen = document.getElementById("open-menu");
hamburgerMenuOpen.addEventListener("click",
    function(){
        document.getElementById("hamburger-menu").classList.add("display-block")
    }
)

const hamburgerMenuClose = document.getElementById("close-menu");
hamburgerMenuClose.addEventListener("click",
    function(){
        document.getElementById("hamburger-menu").classList.remove("display-block")
    }
)