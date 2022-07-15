const section2 =document.querySelector(".how-it-works");
const section3 =document.querySelector(".meals-background");
const section4 =document.querySelector(".testimonials");
const section5 =document.querySelector(".pricing-section");
const section6 =document.querySelector(".signup-section");


const heroBtn1 = document.querySelector(".btn-primary")
const heroBtn2 = document.querySelector(".btn-secondary")
const howItWorks = document.querySelector(".li-1")
const meals = document.querySelector(".li-2")
const testimonials = document.querySelector(".li-3")
const pricing = document.querySelector(".li-4")
const signupForm = document.querySelector(".last-li")

function clicked(button,section){
    button.addEventListener("click",()=>{
    section.scrollIntoView({block: "center"});
    })
}


clicked(heroBtn1,section6);
clicked(heroBtn2,section2);
clicked(howItWorks,section2);
clicked(meals,section3);
clicked(testimonials,section4);
clicked(pricing,section5);
clicked(signupForm,section6);