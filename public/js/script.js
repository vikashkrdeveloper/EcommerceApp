let back_top = document.getElementById('back-to-top');
back_top.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// slider properties
 
let slider_right = document.getElementById('slider-right');
slider_right.addEventListener('click', () => {
    showSlides();
})
let slider_left = document.getElementById('slider-left');
slider_left.addEventListener('click', () => {
    showSlides();
})



 





let slideIndex = 0;
 

function showSlides(){

 
    let slides = document.getElementsByClassName("slider-image");
 

    for (let i = 0; i < slides.length; i++) {
        
        slides[i].style.display = "none";
    }
 
    slideIndex++;
 
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
 
    setTimeout(showSlides, 2000);
}


//header signup properties

let account_body=document.getElementById('account-container-show-option');
let account_list=document.getElementById('account-list');
account_list.addEventListener('click',()=>{
    account_body.style.display="block";
})
window.addEventListener("click", function(event) {
    if (event.target === account_body) {
        account_body.style.display="none";
    }
});