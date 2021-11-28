var contents =document.querySelectorAll(".content");
var navbars = document.querySelectorAll("li");
var slidebar = document.querySelector(".slide_bar");

navbars.forEach((navbar, index)=>{
    
    navbar.onclick = function(){
        slidebar.style.width = this.offsetWidth + 'px';
        slidebar.style.left = this.offsetLeft + 'px';

        document.querySelector("ul .active").classList.remove("active");
        this.classList.add("active");

        document.querySelector(".body_content .active").classList.remove("active");
        contents[index].classList.add("active");
        
        
    }
}); 