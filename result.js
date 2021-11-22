const name1=document.getElementById("name2r")
const prof1=document.getElementById("prof")
const loc1=document.getElementById("location")
const phone1=document.getElementById("phoner")
const email1=document.getElementById("emailr")
const name2=document.getElementById("name1r");




name1.innerHTML=localStorage.getItem("name")
prof1.innerHTML=localStorage.getItem("prof")
loc1.innerHTML=localStorage.getItem("location")
phone1.innerHTML=localStorage.getItem("phone")
email1.innerHTML=localStorage.getItem("email")
name2.innerHTML=localStorage.getItem("name")


const school1=document.getElementById("schr")
const sloc1=document.getElementById("locr")
const degree1=document.getElementById("collr")
const fos1=document.getElementById("fosr")

school1.innerHTML=localStorage.getItem("school")
sloc1.innerHTML=localStorage.getItem("sloc")
degree1.innerHTML=localStorage.getItem("degree")
fos1.innerHTML=localStorage.getItem("fos")
const langs1=document.getElementById("langs");
const skills1=document.getElementById("skillr")
skills1.innerHTML =localStorage.getItem("skills")


