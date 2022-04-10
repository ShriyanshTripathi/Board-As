// due to onclick event fun() is define below

 function fun(){
 


const inName= document.querySelector("#Name").value;
const CollageName= document.querySelector("#CollageName")
const Path= document.querySelector("#Loca")
const  Name=document.querySelector("#name")
const collegename=document.querySelector("#collegename");
const loon=document.querySelector("#loon");
Name.innerHTML=inName;
collegename.innerHTML=CollageName.value;
loon.innerHTML=Path.value;


 }
 
function loadImage(event){
   const image=document.getElementById("imgDisplayed");
   image.src=URL.createObjectURL(event.target.files[0]);
}
