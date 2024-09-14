let scrollt=document.getElementById("scroll-top")
let navbar =document.querySelector("nav")
let allli =document.querySelectorAll("nav ul li a")
let navbarimg =document.querySelector(".navbar-brand img")
window.onscroll=function(){
    if(scrollY>=400){
        scrollt.style.opacity="1"
    }else{
        scrollt.style.opacity="0"
    }
    nav ()
    setactive()
    console.log(scrollY);

}
scrollt.onclick=function(){
    scroll({
        top:0,
        behavior:"smooth"
    })        
}

function nav (){
    if(scrollY>=50){
        navbar.style.backgroundColor="#212529"
        navbar.style.padding="1rem 0"
        navbarimg.style.height="1.5rem"
    }else{
        navbar.style.backgroundColor="transparent"
        navbar.style.padding="1.5rem 0"
        navbarimg.style.height="2rem"

    }
}

function setactive(){
    allli.forEach(li => {
        if(scrollY>=422){
        li.classList.remove("active")
            allli[0].classList.add("active")
        }else{
            allli[0].classList.remove("active")

        }
        if(scrollY>=958){
            allli.forEach(element => {
                element.classList.remove("active")
            });
            allli[1].classList.add("active")
        }
        if(scrollY>=1943){
            allli.forEach(element => {
                element.classList.remove("active")
            });
            allli[2].classList.add("active")
        }
        if(scrollY>=4222){
            allli.forEach(element => {
                element.classList.remove("active")
            });
            allli[3].classList.add("active")
        }
        if(scrollY>=4985){
            allli.forEach(element => {
                element.classList.remove("active")
            });
            allli[4].classList.add("active")
        }
        
    });
}