const togglebutton= document.getElementById("toggle-skills") as HTMLButtonElement;
const skills =document.getElementById("Skills") as HTMLButtonElement;

togglebutton.addEventListener("click",()=>{
    if (skills.style.display==="none") {
        skills.style.display="Block"
    } else{
        skills.style.display="none"
    }
});