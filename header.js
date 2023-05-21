const myOrigin = window.location.origin;
const home = `${myOrigin}/index.html`;
const login = `${myOrigin}/pages/login.html`;
const service= `${myOrigin}/pages/service.html`;
const about = `${myOrigin}/pages/about.html`;
const review = `${myOrigin}/pages/review edit.html`;
const expert = `${myOrigin}/pages/online.html`;
const medicine = `${myOrigin}/pages/product.html`;
const profile = `${myOrigin}/pages/nwproifle.html`;

const blogin=` <header class="main">
<div class="fsec">
    <h1>MED<span>LIFE</span></h1>
</div>
<div class="navbar">
  

    <ul><li><a href="${about}">About</li></a></ul>
    <ul><li><a href="${service}">Service</li></a></ul> 
   
    <ul><li><a href="${review}">Review</li></a></ul>
  
    <ul><li><a href="./pages/login.html">Login</li></a></ul>`


      const aflogin=`<header class="main">
      <div class="fsec">
          <h1>MED<span>LIFE</span></h1>
      </div>
      <div class="navbar">
        
          
          <ul><li><a href="${about}">About</li></a></ul>
          <ul><li><a href="${service}">Service</li></a></ul> 
          <ul><li><a href="${medicine}">Medicines</li></a></ul>
          <ul><li><a href="${expert}">Expert</li></a></ul>
          <ul><li><a href="${review}">Review</li></a></ul>
          <ul><li><a href="${profile}">Profile</li></a></ul>
          <ul><li><a href="../index.html" class="out">Logout</li></a></ul>
          `
          

          if(localStorage.getItem("data")){
            document.body.insertAdjacentHTML("afterbegin",aflogin)
        }
        else{
          document.body.insertAdjacentHTML("afterbegin",blogin)
        }

        if(localStorage.getItem("data")){

    document.querySelector(".out").addEventListener("click",()=>{
      window.confirm("Are you sure you want to Logout?")
      localStorage.removeItem("data")
      
    })}

        

         
        //   function home_header() {
        //     const user_name = JSON.parse(localStorage.getItem("data"));
        //     const logHeader = document.getElementById("header");
        //     if (!user_name) {
        //       logHeader.innerHTML = blogin;
        //     } else {
        //       logHeader.innerHTML = aflogin;
        //   }
        // }
        // document.addEventListener("DOMContentLoaded", () => {
        //   home_header();
        // });
        




//email js


          
